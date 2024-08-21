import React, {
  useEffect
} from 'react'
import {
  Outlet,
  ScrollRestoration,
  NavLink,
  useLocation
} from "react-router-dom";
import reactLogo from '@/assets/react.svg'
import routes from '@/routes'
import rootClasses from './Root.module.scss'

export default function Root() {
  let location = useLocation();
  
  useEffect(() => {
    const routeName = routes.find((route) => route.path === location.pathname)?.name;
    if (routeName) {
      document.title = routeName;
    }
  }, [location]);

  return (
    <>
      <header>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className={rootClasses.logo} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className={`${rootClasses.logo} ${rootClasses.react}`} alt="React logo" />
        </a>
        {
          routes.map((route) => (
            <NavLink
              to={route.path}
              key={route.path}
            >{route.name}</NavLink>
          ))
        }
        <NavLink
          to='/error'
        >Error</NavLink>
      </header>
      <main>
        <Outlet />
        <ScrollRestoration />
      </main>
      <footer className={rootClasses['read-the-docs']}>
        Click on the Vite and React logos to learn more
      </footer>
    </>
  )
}
