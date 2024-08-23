import React, {

} from 'react'
import PropTypes from 'prop-types'
import classes from './CardDeck.module.scss'

const Cards = [-10, ...Array(11).keys()]

export default function CardDeck({
    handleCountUp,
}) {

    return (
        <section>
            {
                Cards.map((card) => (
                    <button key={card} onClick={e => handleCountUp(e.target.dataset.count)} data-count={card}>{card}</button>
                ))
            }
        </section>
    )
}

CardDeck.propTypes = {
    handleCountUp: PropTypes.func.isRequired,
}