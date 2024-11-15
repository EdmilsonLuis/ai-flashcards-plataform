import React from 'react'
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, BookUser } from 'lucide-react';
import { prisma } from '@/lib/db';
import { Set } from '@/lib/types';
import SetExportDropdown from '../../_components/set-export-actions';
import SetMoreDropdownActions from '../../_components/set-more-actions';

const Page = async ({ params: { id } }: { params: { id: string } }) => {
    const set = await prisma.set.findUnique({
        where: {
            id
        }
    }) as Set;

    if (!set) return notFound();

    return (
        <div className="p-4 md:p-10">
            <div className="flex flex-col w-full md:flex-row items-center gap-x-4 justify-between mb-6">
                <div className="flex flex-wrap items-center gap-x-4">
                    <Button variant='secondary' className='rounded-full' asChild>
                        <Link href={`/dashboard`} className=''>
                            <ArrowLeft className='size-4 mr-2' /> Back
                        </Link>
                    </Button>
                    <h4 className='text-lg font-semibold text-black'>
                        {set?.title || "Untitled"}
                    </h4>
                </div>
                <div className="flex items-center gap-x-4 mt-6 md:mt-0 w-full md:w-auto">
                    <SetExportDropdown set={set} />
                    <Button className='rounded-full bg-green-500 gap-x-2 ' asChild>
                        <Link href={`/pratice/${set.id}`}><BookUser className='size-4' /> Pratice </Link>
                    </Button>
                    <SetMoreDropdownActions set={set} />
                </div>
            </div>

            <Card>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableHead>Question</TableHead>
                        </TableHeader>
                        <TableBody>
                            {
                                set.cards.map((card, index) => (
                                    <TableRow key={index} className=''>
                                        <TableCell>
                                            <p>#{index + 1}) {card.term}</p>
                                            <p>{card.definition}</p>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

export default Page