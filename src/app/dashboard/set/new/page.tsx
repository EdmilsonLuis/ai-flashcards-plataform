import React from 'react'
import { getAuthSession } from '@/lib/nextauth';
import SetForm from '../../_components/set-form';



const Page = async () => {
    const session = await getAuthSession();

    return (
        <SetForm userId={session?.user.id!} />
    )
}

export default Page