import React from 'react'
import { useCard } from '../../screens/card-number-input-screen/context'
import RemoveIcon from '../icons/remove-icon'

export default function CardListItem({ cardId, number, amount }) {
    const { removeCard } = useCard()
    return (
        <div
            id="password"
            name="password"
            type="text"
            autoComplete="current-password"
            className={`relative block flex h-[50px] w-full appearance-none items-center justify-between rounded-none border-b border-b-black text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-indigo-500 sm:text-body`}
            placeholder="XXXX XXXX XXXX XXXX"
        >
            <p className="text-content">Card ending in {number}</p>
            <div className="flex items-center">
                <p className="pr-2 text-content font-normal">
                    Balance: ${amount}
                </p>
                <div onClick={() => removeCard(cardId)}>
                    <RemoveIcon />
                </div>
            </div>
        </div>
    )
}
