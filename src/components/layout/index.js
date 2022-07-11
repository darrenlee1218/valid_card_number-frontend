import React from 'react'

export default function Layout({ children }) {
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-[375px] p-[15px]">{children}</div>
        </div>
    )
}
