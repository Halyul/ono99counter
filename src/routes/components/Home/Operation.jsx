import React, {
    useState
} from 'react'
import PropTypes from 'prop-types'
import classes from './Operation.module.scss'

export default function Operation({
    history,
    prevHistory,
    handleReset,
    handlePrev,
    handleNext,
    isTTSOn,
    handleTTSToggle,
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
            name: isTTSOn ? 'TTS On' : 'TTS Off',
            onClick: handleTTSToggle,
            disabled: false,
            className: classes.tts,
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
                        className={action.className ? action.className : ''}
                        // onKeyDown={}
                        // onKeyUp={}
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
    isTTSOn: PropTypes.bool.isRequired,
    handleTTSToggle: PropTypes.func.isRequired,
}