import React, {

} from 'react'
import PropTypes from 'prop-types'
import classes from './Operation.module.scss'

export default function Operation({
    history,
    prevHistory,
    handleReset,
    handlePrev,
    handleNext,
}) {

    return (
        <section>
            <button onClick={handleReset}>Reset</button>
            <button
                onClick={handlePrev}
                disabled={history.length === 1}
                >
                Prev
            </button>
            <button
                onClick={handleNext}
                disabled={prevHistory.length === 0}
                >
                Next
            </button>
        </section>
    )
}

Operation.propTypes = {
    history: PropTypes.array.isRequired,
    prevHistory: PropTypes.array.isRequired,
    handleReset: PropTypes.func.isRequired,
    handlePrev: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
}