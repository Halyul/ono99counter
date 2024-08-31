import React, {
} from 'react'
import classes from './Rules.module.scss'
import Markdown from 'react-markdown'

export default function Rules() {
    const markdown = '# Hi, *Pluto*!'

    return (
        <section className={classes.rules}>
            <section className={classes.content}>
                <Markdown>
                    {markdown}
                </Markdown>
            </section>
        </section>
    )
}
