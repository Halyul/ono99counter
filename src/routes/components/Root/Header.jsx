import React, {
    useEffect
} from 'react'
import {
    NavLink,
    useLocation
} from "react-router-dom";
import routes from '@/routes'
import classes from './Header.module.scss'

export default function Header() {
    let location = useLocation();

    useEffect(() => {
        const routeName = routes.find((route) => route.path === location.pathname)?.name;
        if (routeName) {
            document.title = routeName;
        }
    }, [location]);

    return (
        <header className={classes.header}>
            {
                routes.map((route) => (
                    <NavLink
                        to={route.path}
                        key={route.path}
                    >{route.name}</NavLink>
                ))
            }
        </header>
    )
}