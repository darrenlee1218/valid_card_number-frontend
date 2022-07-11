import React from 'react'
import InputMask from 'react-input-mask'
import CardDetail from './components/card-detail'
import { Controller, useFormContext } from 'react-hook-form'

const CardInput = () => {
    const methods = useFormContext()
    const { control, formState } = methods

    const { errors } = formState
    return (
        <div className="-space-y-px rounded-md shadow-sm">
            <CardDetail />

            <div>
                <Controller
                    name="cardNumber"
                    control={control}
                    defaultValue={''}
                    render={({ field: { onChange, value } }) => (
                        <InputMask
                            mask="9999 9999 9999 9999"
                            value={value}
                            onChange={onChange}
                        >
                            {(inputProps) => (
                                <input
                                    id="password"
                                    name="password"
                                    type="text"
                                    autoComplete="current-password"
                                    className={`relative block h-[50px] w-full appearance-none rounded-none rounded-b-xl border border-black px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none focus:ring-indigo-500 sm:text-body ${
                                        errors?.cardNumber?.message &&
                                        `border-error-color`
                                    }`}
                                    placeholder="XXXX XXXX XXXX XXXX"
                                    {...inputProps}
                                />
                            )}
                        </InputMask>
                    )}
                />
                <p
                    className={`${
                        errors?.cardNumber?.message ? `py-[20px]` : `py-[7.5px]`
                    } text-center text-error font-bold text-error-color`}
                >
                    {errors?.cardNumber?.message}
                </p>
            </div>
        </div>
    )
}

export default CardInput
