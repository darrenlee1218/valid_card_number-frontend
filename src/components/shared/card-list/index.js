import React from 'react'
import { useCard } from '../../screens/card-number-input-screen/context'
import CardListItem from '../card-list-item'

export default function CardList() {
    const { cardList } = useCard()
    return cardList?.map((item, index) => (
        <CardListItem
            key={index}
            cardId={item.card_id}
            number={item.card_number}
            amount={item.amount}
        />
    ))
}
