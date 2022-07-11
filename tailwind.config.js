/** @type {import('tailwindcss').Config} */

const { fontSize } = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontSize: {
            title: ['28px', { lineHeight: '33px' }],
            body: ['14px', { lineHeight: '24px', letterSpacing: '2.4px' }],
            content: ['14px', { lineHeight: '24px', letterSpacing: '1px' }],
            caption1: ['16px', { lineHeight: '19px' }],
            error: ['14px', '18px'],
            ...fontSize,
        },
        extend: {
            screens: {
                DEFAULT: '1440px',
                mobileS: '320px',
                // => @media (min-width: 320px) { ... }
                mobileM: '375px',
                // => @media (min-width: 375px) { ... }
                mobileL: '425px',
                // => @media (min-width: 425px) { ... }
                tabletS: '640px',
                // => @media (min-width: 640px) { ... }
                tablet: '768px',
                // => @media (min-width: 768px) { ... }
                laptop: '1024px',
                // => @media (min-width: 1024px) { ... }
                laptopM: '1280px',
                // => @media (min-width: 1280px) { ... }
                laptopL: '1440px',
                // => @media (min-width: 1440px) { ... }
                xl: '1536px',
                // => @media (min-width: 1536px) { ... }
                '2xl': '1920px',
                // => @media (min-width: 1920px) { ... }
                '3xl': '2560px',
                // => @media (min-width: 2560px) { ... }
                '4xl': '3440px',
                // => @media (min-width: 3440px) { ... }
            },
            colors: {
                'background-color': '#FAF5F1',
                'error-color': '#FF4D00',
            },
        },
    },
    plugins: [],
}
