import React, {

} from 'react'
import PropTypes from 'prop-types'
import classes from './History.module.scss'

export default function History({
    history,
}) {

    return (
        <section className={classes.history}>
            <section className={classes.score}>
                {history[history.length - 1]}
            </section>
            <section className={classes.score}>
                {history[history.length - 1]}
            </section>
        </section>
    )
}

History.propTypes = {
    history: PropTypes.array.isRequired
}