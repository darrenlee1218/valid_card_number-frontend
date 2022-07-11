import { get, post, destroy } from './base.js'

export const CardApi = {
    getCardList: () => get(`api/card`).then(({ data }) => data),
    addCard: (cardNumber) =>
        post(`api/card`, { cardNumber }).then(({ data }) => data),
    removeCard: (cardId) =>
        destroy(`api/card/${cardId}`).then(({ data }) => data),
}
