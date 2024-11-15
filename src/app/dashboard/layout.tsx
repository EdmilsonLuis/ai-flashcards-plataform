import Nav from '@/app/dashboard/_components/nav'
import React from 'react'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Nav />
            <main className=' bg-stone-50'>
                {children}
            </main>
            <footer>
                <p></p>
            </footer>
        </div>
    )
}

export default AppLayout