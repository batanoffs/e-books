import { Button } from '@mui/material'

export const Navbar = () => {
    return (
        <nav className="xl:px-60 lg:px-40 md:px-20 border-solid border border-sky-500">
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
    )
}
