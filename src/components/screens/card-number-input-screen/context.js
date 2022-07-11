import { createContext, useContext } from 'react'

const CardContext = createContext(undefined)
CardContext.displayName = 'CardContext'

export function useCard() {
    const context = useContext(CardContext)
    if (context === undefined) {
        throw new Error(`useCard must be used within a CardContext Provider`)
    }
    return context
}

export default CardContext
