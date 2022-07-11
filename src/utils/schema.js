import * as yup from 'yup'

export const cardFormSchema = yup.object().shape({
    cardNumber: yup
        .string()
        .required('Please enter Card Number.')
        .matches(
            /\b(([0-9][0-9][0-9][0-5]|[0-9][0-9][0-9][0-5]|[0-9][0-9][0-9][0-5]?[0-9][0-9]?)(\s|$)){4}\b/,
            'Invalid number'
        ),
})
