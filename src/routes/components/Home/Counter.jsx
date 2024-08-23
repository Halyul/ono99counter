import React, {

} from 'react'
import PropTypes from 'prop-types'
import classes from './Counter.module.scss'

export default function Counter({
    history,
}) {

    return (
        <section>
            {history[history.length - 1]}
        </section>
    )
}

Counter.propTypes = {
    history: PropTypes.array.isRequired
}