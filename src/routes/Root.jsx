import React, {
  
} from 'react'
import {
  Outlet,
  ScrollRestoration
} from "react-router-dom";
import classes from './Root.module.scss'
import Header from '@/routes/components/Root/Header'

export default function Root() {

  return (
    <>
      <Header />
      <main className={classes["main"]}>
        <Outlet />
        <ScrollRestoration />
      </main>
    </>
  )
}
