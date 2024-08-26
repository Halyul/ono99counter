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
    const actions = [
        {
            name: 'Prev',
            onClick: handlePrev,
            disabled: history.length === 1,
        },
        {
            name: 'Reset',
            onClick: handleReset,
            disabled: false,
        },
        {
            name: 'Next',
            onClick: handleNext,
            disabled: prevHistory.length === 0,
        },
        {
            name: 'TTS',
            onClick: () => {
                const msg = new SpeechSynthesisUtterance(history[history.length - 1])
                window.speechSynthesis.speak(msg)
            },
            disabled: false,
        }
    ]

    return (
        <section className={classes.operation}>
            {
                actions.map((action) => (
                    <button
                        key={action.name}
                        onClick={action.onClick}
                        disabled={action.disabled}
                        className={classes.btn}
                    >
                        {action.name}
                    </button>
                ))
            }
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