import React, {

} from 'react'
import PropTypes from 'prop-types'
import classes from './Counter.module.scss'
export default function Counter({
    history,
}) {
    const currentScoreString = history[history.length - 1].toString()
    const currentScoreAsList = currentScoreString.split('')

    return (
        <section
            className={classes.counter}
            style={{
                gridTemplateColumns: `repeat(${currentScoreAsList.length}, 1fr)`
            }}
        >
            {
                currentScoreAsList.map((item, index) => {
                    return (
                        <section key={index} className={classes['counter-item']}>
                            {item}
                        </section>
                    )
                })
            }
        </section>
    )
}

Counter.propTypes = {
    history: PropTypes.array.isRequired
}