import React from 'react'
import HomeIcon from '../../../icons/home-icon'

export default function CardDetail() {
    return (
        <div>
            <div className="relative block w-full appearance-none rounded-none rounded-t-xl border border-black bg-background-color px-[15px] pt-[20px] pb-[15px] text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500  sm:text-sm">
                <div className="flex items-center justify-between">
                    <p className="text-title font-bold">Balance checker</p>
                    <HomeIcon />
                </div>
                <p className="pt-3 text-body">
                    Enter your card number to check it's balance.
                </p>
            </div>
        </div>
    )
}
