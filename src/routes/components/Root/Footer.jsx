import React, {
    
} from 'react'
import classes from './Footer.module.scss'

export default function Footer() {
    const buildDate = '__DATE__'
    const startYear = '__START_YEAR__'
    const year = new Date().getFullYear()

    return (
        <footer className={classes['read-the-docs']}>
            Built at: {buildDate}
            <span>© {startYear === year ? year : `${startYear} - ${year}`} Halyul</span>
        </footer>
    )
}