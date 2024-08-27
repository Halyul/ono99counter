import React, {
    useEffect
} from 'react'
import PropTypes from 'prop-types'
import classes from './CardDeck.module.scss'

const SCORE_CARDS = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9,
    -10, 0, 10,
]

export default function CardDeck({
    handleCountUp,
}) {

    useEffect(() => {
        function keyUpHandler(e) {
            if (SCORE_CARDS.includes(parseInt(e.key))) {
                handleCountUp(e.key)
            } else if (e.key === '-' || e.key === '_') {
                handleCountUp(-10)
            } else if (e.key === '=' || e.key === '+') {
                handleCountUp(10)
            }
        }

        document.addEventListener("keyup", keyUpHandler);

        return () => {
            document.removeEventListener("keyup", keyUpHandler);
        };
    }, [handleCountUp]);

    return (
        <section
            className={classes['card-deck']}
        >
            {
                SCORE_CARDS.map((card) => (
                    <button
                        key={card}
                        onClick={e => handleCountUp(e.target.dataset.count)}
                        data-count={card}
                        className={classes.btn}
                    >
                        {card}
                    </button>
                ))
            }
        </section>
    )
}

CardDeck.propTypes = {
    handleCountUp: PropTypes.func.isRequired,
}