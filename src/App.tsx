import { ThemeProvider, createTheme } from '@mui/material/styles'
import { SingleCarousel } from './assets/SingleCarousel'
import { MultyCarousel } from './assets/MultyCarousel'
import { Header } from './components/Header'

import books from './books.json'
import './index.css'

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Montserrat Alternates',
            textTransform: 'none',
            fontSize: 14,
        },
    },
})

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <main className="xl:mx-60 lg:mx-40 md:mx-20">
                <section className="px-10 bg-gradient-to-r from-indigo-500 to-gray-900">
                    <SingleCarousel featured={books.featured} />
                </section>
                <section className="border-solid border border-gray-500 py-8">
                    <h1 className="text-3xl text-center pb-6"> Новодошли </h1>
                    <MultyCarousel featured={books.featured} />
                </section>
                <section className="border-solid border border-gray-500"> 03 </section>
                <section className="border-solid border border-gray-500"> 04 </section>
                <section className="border-solid border border-gray-500"> 05 </section>
                <section className="border-solid border border-gray-500"> 06 </section>
            </main>
        </ThemeProvider>
    )
}
