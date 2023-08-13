import type { ReactNode } from "react"
import NavBar from "@/components/NavBar"
import "./globals.css"
import { exo2, orbitron } from "./fonts"
import { Metadata } from "next"

export const metadata: Metadata ={
    title: {
        default: "Indie Gamer",
        template: "%s | Indie Hamer"
    },
    description: "Only the best indie games, reviewed for you",
}

interface LayoutProps {
    children: ReactNode
}
export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
            <body className=" bg-orange-50 px-8 py-8 flex flex-col min-h-screen">
                <header>
                   <NavBar/>
                </header>
                <main className="py-3 grow">
                    {children}
                </main>
                <footer className="border-t py-2 text-center text-slate-500 text-xs">
                    Game data and images courtesy of <a 
                    className='text-orange-800 hover:underline'
                    href="http://rawg.io" target="_blank">RAWG</a>
                </footer>

            </body>
        </html>
    )
}