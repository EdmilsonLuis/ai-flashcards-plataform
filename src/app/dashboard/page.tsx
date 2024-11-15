import React from 'react'
import SetList from '@/app/dashboard/_components/set-list'
import { prisma } from '@/lib/db'
import { getAuthSession } from '@/lib/nextauth'
import { redirect } from 'next/navigation'

const Page = async () => {
    const session = await getAuthSession();
    if (!session?.user) {
        redirect("/api/auth/signin");
    }

    const sets = await prisma.set.findMany({
        where: {
            userId: session.user.id
        }
    })

    return (
        <div className='p-10 bg-[url("/bg.png")] min-h-screen'>
            {sets.length > 0 ?
                (
                    <SetList sets={sets} />
                ) :
                (
                    <div className='text-center h-full flex fle-col items-center justify-center p-10'>
                        <p className='text-2xl '>No sets found.</p>
                    </div>
                )}
        </div>
    )
}

export default Page