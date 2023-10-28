import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.tsx";

export default function RootLayout () {
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
            <Breadcrumbs />
            <main>
                <Outlet />
            </main>
        </>
    )
}

