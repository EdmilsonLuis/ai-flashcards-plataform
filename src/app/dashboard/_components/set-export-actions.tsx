"use client"

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Set } from '@/lib/types'
import { exportToCSV, exportToPdf } from '@/lib/utils'
import { ChevronDown, SaveAll } from 'lucide-react'
import React from 'react'

const SetExportDropdown = ({ set }: { set: Set }) => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant='outline' className='rounded-full gap-x-2'>
                        <SaveAll className='size-4' />
                        Export
                        <ChevronDown className='size-3' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => exportToPdf(set.cards, set.title)}>.PDF</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => exportToCSV(set.cards, set.title)}>.CSV</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default SetExportDropdown