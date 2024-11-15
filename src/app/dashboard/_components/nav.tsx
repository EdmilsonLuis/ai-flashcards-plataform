import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import UserButton from './user-button'
import Image from 'next/image'
import { Plus } from 'lucide-react'

// Q&Arize
const Nav = async () => {
    return (
        <header className='sticky top-0 z-50'>
            <div className="container mx-auto h-16 flex items-center justify-between border-b bg-white">
                <Link className='' href='/dashboard'>
                    <span className='sr-only'>Mokker</span>
                    <Image
                        className='h-10 w-auto'
                        src={`/logo.svg`}
                        alt='Mokker - Study smarter with mocks exams'
                        width={1000}
                        height={1000}
                    />
                </Link>

                <nav className='flex items-center gap-x-4'>
                    <Button className='rounded-full bg-blue-600 gap-x-2 !h-12 !w-12 md:!w-auto md:!h-auto fixed md:static bottom-10 right-5' asChild>
                        <Link href='/dashboard/set/new'>
                            <Plus className='size-4' />
                            <span className='hidden md:inline-block'>Create New Set</span>
                        </Link>
                    </Button>
                    <UserButton />
                </nav>
            </div>
        </header>
    )
}

export default Nav