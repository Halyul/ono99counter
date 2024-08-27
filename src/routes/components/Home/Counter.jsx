import React, {

} from 'react'
import PropTypes from 'prop-types'
import classes from './Counter.module.scss'
export default function Counter({
    history,
}) {

    return (
        <section className={classes.counter}>
            {/* <section className={classes.title}>
                Current Score:
            </section> */}
            <section className={classes.score}>
                {history[history.length - 1]}
            </section>
            {/* <section className={classes.history}>
                {
                    history.map((score, index) => (
                        <span key={index}>
                            {score}
                        </span>
                    ))
                }
            </section> */}
        </section>
    )
}

Counter.propTypes = {
    history: PropTypes.array.isRequired
}