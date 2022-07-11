import React from 'react'

const HomeIcon = ({ width = 26, height = 24, fill = '#000000', ...rest }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8392 0.492859L13.0523 9.87476C12.5153 10.7371 11.5714 11.2067 10.5555 11.2067H0.266815L4.78692 3.483C4.94645 3.21041 5.2166 3.02063 5.52714 2.96299L18.8392 0.492859Z"
                fill="black"
            />
            <path
                opacity="0.3"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.266602 11.2082V23.4562C0.266602 23.7565 0.510072 24 0.810408 24H24.9561C25.2565 24 25.5 23.7565 25.5 23.4562V11.5083C25.5 11.3051 25.4431 11.1061 25.3358 10.9336L18.8392 0.492859L13.0523 9.87483C12.5154 10.7372 11.5714 11.2082 10.5555 11.2082H0.266602Z"
                fill="black"
            />
        </svg>
    )
}

export default HomeIcon
