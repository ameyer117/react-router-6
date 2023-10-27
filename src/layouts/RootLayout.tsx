import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout () {
    console.log('RootLayout')
    return (
        <>
            <header>
                <nav>
                    <h1>Jabarouter</h1>
                    <NavLink to="/">Home</NavLink>
                    &nbsp;
                    <NavLink to="/about">About</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

