'use client'
import React from 'react'
import { useTheme } from "@/context/UserContext"
export default function Hero() {
    const { theme } = useTheme();
    // console.log(theme)
    return (
        <div
            className='w-full h-full mt-1'
            style={{ background: theme['--background'], color: theme['--foreground'] }}>
            <h1
                className='font-bold text-center mt-8 text-4xl'
                style={{ color: theme['--primary'] }}>Groww
                
            </h1>

            <div className="absolute top-0 left-0 p-4">
    <img src={"https://groww.in/groww-logo-270.png"} alt="Merchant Logo" className="w-5 h-auto mt-5" />
</div>



        </div>
    )
}
