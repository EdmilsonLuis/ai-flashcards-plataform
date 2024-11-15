import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card'
import { MessageCircleQuestion } from 'lucide-react'
import Link from 'next/link'
import { Set } from '@prisma/client'

const SetCard = ({ set }: { set: Set }) => {
    return (
        <Card>
            <CardContent className='p-0'>
                <Link className='flex flex-col gap-4 p-4' href={`/dashboard/set/${set.id}`}>
                    <MessageCircleQuestion className='size-5 text-blue-600' />
                    <span className='text-lg'>{set.title}</span>
                </Link>
            </CardContent>
        </Card>
    )
}

const SetList = ({ sets }: { sets: Set[] }) => {
    return (
        <div className="grid grid-cols-5 gap-4">
            {
                sets.map(set => (
                    <SetCard key={set.id} set={set} />
                ))
            }
        </div>
    )
}

export default SetList