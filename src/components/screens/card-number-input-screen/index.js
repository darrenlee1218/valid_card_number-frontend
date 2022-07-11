import React, { useState, useCallback, useMemo } from 'react'
import Button from '../../shared/button'
import CardInput from '../../shared/card-input'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { cardFormSchema } from '../../../utils/schema'
import CardList from '../../shared/card-list'
import CardContext from './context'
import { CardApi } from '../../../api/card'

export default function Card() {
    const [state, setState] = useState({
        cardNumber: '',
        cardList: [],
    })

    const methods = useForm({
        mode: 'onChange',
        defaultValues: state,
        resolver: yupResolver(cardFormSchema),
    })

    const onSubmit = async (data) => {
        await CardApi.addCard(data.cardNumber).then((res) => {
            console.log(res)
        })

        addCard()
    }

    const addCard = useCallback(async () => {
        CardApi.getCardList().then((res) => {
            setState({
                ...state,
                cardList: [...res],
            })
        })
    }, [])

    const removeCard = useCallback((cardId) => {
        CardApi.removeCard(cardId).then((res) => {
            CardApi.getCardList().then((res) => {
                setState({
                    ...state,
                    cardList: [...res],
                })
            })
        })
    }, [])

    const value = useMemo(
        () => ({
            ...state,
            addCard,
            removeCard,
        }),
        [state, addCard, removeCard]
    )

    const { handleSubmit } = methods
    return (
        <FormProvider {...methods}>
            <CardContext.Provider value={value}>
                <CardInput />
                <Button onClick={handleSubmit(onSubmit)} name="Check" />
                <CardList />
            </CardContext.Provider>
        </FormProvider>
    )
}
