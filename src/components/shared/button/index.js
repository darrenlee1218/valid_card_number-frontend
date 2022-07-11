import React from 'react'

export default function Button({ onClick, name }) {
    return (
        <button
            type="submit"
            onClick={onClick}
            className="mb-[20px] flex h-[50px] w-full items-center justify-center rounded-md bg-black text-sm text-caption1 font-bold text-white hover:bg-gray-600"
        >
            {name}
        </button>
    )
}
