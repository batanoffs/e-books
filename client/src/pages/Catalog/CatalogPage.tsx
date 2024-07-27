import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, useParams } from 'react-router-dom';

import { API } from '../../utils/constants/api';
import { DashboardLayout } from '../../components/Layout/dashboard/DashboardLayout';
import { LayoutHeader } from '../../components/Layout/dashboard/LayoutHeader';
import { LayoutAside } from '../../components/Layout/dashboard/LayoutAside';
import { CatalogItems } from '../../components/Layout/dashboard/CatalogItems';
import { useFiltersStore } from '../../store/categories';
import { ItemCard } from '../../components/Cards/ItemCard';
import { DetailsPage } from '../Details/DetailsPage';

const CatalogPage = () => {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const navCategory = useFiltersStore((state) => state.navCategory);
    const params = useParams();
    const type = Object.values(params)[0]?.split('/')[0];

    const setCategoriesForType = useFiltersStore((state) => {
        switch (type) {
            case 'books':
                return state.setBookCategories;
            case 'textbooks':
                return state.setTextbookCategories;
            case 'stationery':
                return state.setStationeryCategories;
            default:
                return undefined;
        }
    });

    useEffect(() => {
        const fetchItems = async () => {
            const apiUrl =
                type === 'books'
                    ? API.BOOKS
                    : type === 'textbooks'
                    ? API.TEXTBOOKS
                    : API.STATIONERY;
            const response = await axios.get(apiUrl);
            const items = response.data;
            setItems(items);
            const categories = Array.from(new Set(items.map((item) => item.category)));
            setCategories(categories);
            setCategoriesForType && setCategoriesForType(categories);
        };

        fetchItems();
    }, [type, setCategoriesForType]);

    console.log('items:', items);
    

    const headerText =
        type === 'books' ? 'книги' : type === 'textbooks' ? 'учебници' : 'канцелария';

    const Layout = (
        <DashboardLayout
            header={
                <LayoutHeader
                    navCategory={navCategory}
                    path={`книжарница / ${headerText} / ${navCategory}`}
                    hasSorting={true}
                    resultCount={items.length}
                    title
                />
            }
            aside={<LayoutAside categories={categories} />}
        >
            <CatalogItems
                items={items}
                CardComponent={
                    type === 'books' ? ItemCard : type === 'textbooks' ? ItemCard : ItemCard
                }
            />
            {/* TODO children for maybe promotions etc*/}
        </DashboardLayout>
    );

    return (
        <Routes>
            <Route path={`/${type}/${navCategory}`} element={Layout} />
            <Route
                path={`/${type}/${navCategory}/:id`}
                element={
                    <DetailsPage path={`книжарница / ${headerText} / ${navCategory}`} type={type} />
                }
            />
        </Routes>
    );
};

export default CatalogPage;
