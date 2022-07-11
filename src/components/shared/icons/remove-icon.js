import React from 'react'

const RemoveIcon = ({ width = 13, height = 16, fill = '#000000', ...rest }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.07149 0.820007L4.35723 1.53427H0.785889V2.96281H12.2142V1.53427H8.64283L7.92856 0.820007H5.07149ZM1.50016 4.39134V13.6768C1.50016 14.4625 2.143 15.1054 2.92869 15.1054H10.0714C10.8571 15.1054 11.4999 14.4625 11.4999 13.6768V4.39134H1.50016ZM3.64296 5.81988H5.07149V13.6768H3.64296V5.81988ZM7.92856 5.81988H9.3571V13.6768H7.92856V5.81988Z"
                fill={fill}
            />
        </svg>
    )
}

export default RemoveIcon
