import { useEffect, useState } from 'react';
import axios from 'axios';

import { API } from '../../constants/api.ts';
import { DashboardBody } from '../../components/Layout/dashboard/DashboardBody.tsx';
import { DashboardLayout } from '../../components/Layout/dashboard/DashboardLayout.tsx';
import { useFiltersStore } from '../../store/categories.ts';

type PageProps = {
    path: string;
};

const StationeryPage = ({ path }: PageProps) => {
    const [stationeries, setStationeries] = useState([]);
    const setStationeriesCategories = useFiltersStore((state) => state.setStationeriesCategories);
    const stationeriesCategories = useFiltersStore((state) => state.stationeriesCategories);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get(API.TEXTBOOKS);
            const stationeries = response.data;
            setStationeries(stationeries);
            const categoriesFromStationeries = Array.from(
                new Set(stationeries.map((stationery) => stationery.category))
            );
            setStationeriesCategories(categoriesFromStationeries);
        };
        fetchBooks();
    }, []);

    const content = [
        {
            id: 'textbooks',
            element: <DashboardBody items={stationeries} />,
        },
    ];

    return <DashboardLayout path={path} children={content} categories={stationeriesCategories} />;
};

export default StationeryPage;
