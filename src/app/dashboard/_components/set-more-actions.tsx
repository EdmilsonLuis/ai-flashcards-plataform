"use client"

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { deleteSet } from '@/lib/actions'
import { Set } from '@/lib/types'
import { LucideMoreVertical, Trash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const SetMoreDropdownActions = ({ set }: { set: Set }) => {
    const router = useRouter()
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant='ghost' className='rounded-full gap-x-2 p-0'>
                        <LucideMoreVertical className='size-4' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem
                        onClick={async () => {
                            const yesDelete = confirm('Are you sure you want to delete this set?')
                            if (yesDelete) {
                                const success = await deleteSet(set.id);
                                if(success) router.push("/dashboard")
                            }
                        }}
                        className='text-red-500 gap-x-2'><Trash className='size-4' /> Delete Set</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default SetMoreDropdownActions