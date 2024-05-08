import { BookCard } from './components/card'
import './index.css'
import { Button } from '@mui/material'

function App() {
    return (
        <>
            <nav className="border-solid  px-40 border border-sky-500">
                <div className="flex justify-between px-4 py-5">
                    <div className="">
                        <img src="" alt="bookstore logo" />
                    </div>
                    <div className="flex gap-5">
                        <a href="">Tab</a>
                        <a href="">Tab</a>
                        <a href="">Tab</a>
                        <a href="">Tab</a>
                        <a href="">Tab</a>
                        <Button variant="outlined">Login</Button>
                        <Button variant="contained">Register</Button>
                    </div>
                </div>{' '}
            </nav>
            <div className="grid grid-rows-6  mx-40">
                <div className="border-solid border border-gray-500"> 01 </div>
                <div className="border-solid border flex gap-4 border-gray-500 py-8"> 
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
                <div className="border-solid border border-gray-500"> 03 </div>
                <div className="border-solid border border-gray-500"> 04 </div>
                <div className="border-solid border border-gray-500"> 05 </div>
                <div className="border-solid border border-gray-500"> 06 </div>
            </div>
        </>
    )
}

export default App
