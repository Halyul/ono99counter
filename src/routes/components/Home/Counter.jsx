import React, {

} from 'react'
import PropTypes from 'prop-types'
import classes from './Counter.module.scss'
export default function Counter({
    history,
}) {

    return (
        <section className={classes.counter}>
            <section className={classes.score}>
                {history[history.length - 1]}
            </section>
        </section>
    )
}

Counter.propTypes = {
    history: PropTypes.array.isRequired
}