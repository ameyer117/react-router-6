import { Link, NavLink, useLocation } from "react-router-dom";


export default function Breadcrumbs() {
    const location = useLocation()
    let currentLink = ''

    const crumbs = location.pathname.split('/').map((crumb, index) => {
        if (index === 0) {
            return {
                link: '/',
                name: 'Home'
            }
        }
        currentLink += `/${crumb}`
        return {
            link: currentLink,
            name: crumb
        }
    }).filter(crumb => crumb.name !== '')

    return (
        <nav className="breadcrumbs">
            {crumbs.map((crumb, index) => {
                if (index === crumbs.length - 1) {
                    return <NavLink className="crumb" to={crumb.link} key={crumb.link}>{crumb.name}</NavLink>
                }
                return <NavLink className="crumb" to={crumb.link} key={crumb.link}>{crumb.name}</NavLink>
            })}
        </nav>
    )
}