import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BooksCarousel } from './assets/BooksCarousel'
import { Navbar } from './components/Navbar'

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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <main className="xl:mx-60 lg:mx-40 md:mx-20">
                <section className="border-solid border border-gray-500"> 01 </section>
                <section className="border-solid border border-gray-500 py-8 ">
                    <BooksCarousel featured={books.featured} />
                </section>
                <section className="border-solid border border-gray-500"> 03 </section>
                <section className="border-solid border border-gray-500"> 04 </section>
                <section className="border-solid border border-gray-500"> 05 </section>
                <section className="border-solid border border-gray-500"> 06 </section>
            </main>
        </ThemeProvider>
    )
}

export default App
