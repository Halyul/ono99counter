import React, {

} from 'react'
import PropTypes from 'prop-types'
import classes from './CardDeck.module.scss'

const Cards = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9,
    -10, 0, 10,
]

export default function CardDeck({
    handleCountUp,
}) {

    return (
        <section className={classes['card-deck']}>
            {
                Cards.map((card) => (
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