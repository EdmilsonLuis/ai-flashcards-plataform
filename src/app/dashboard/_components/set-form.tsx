"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Set } from '@prisma/client';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link';
import { ArrowLeft, Loader } from 'lucide-react';
import { saveSet } from '@/lib/actions';
import { useRouter } from 'next/navigation';
import { CreateSetFormType, setSchema } from '@/lib/validation';



const SetForm = ({ userId, set }: { userId: string, set?: Set }) => {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const form = useForm<CreateSetFormType>({
        resolver: zodResolver(setSchema),
        defaultValues: {
            title: set?.title || "",
            content: set?.content || "",
            userId
        },
    });

    const onSubmit = async (data: CreateSetFormType) => {
        setIsLoading(true)
        const res = await saveSet(data);
        if (res) {
            router.push(`/dashboard/set/${res.id}`)
        }
        setIsLoading(false)
    }

    return (
        <div className='p-4 md:p-10'>
            <div className="flex items-center gap-x-4 mb-6">
                <Button variant='secondary' className='rounded-full' asChild>
                    <Link href={`/dashboard`} className=''>
                        <ArrowLeft className='size-4 mr-2' /> Back
                    </Link>
                </Button>
                <h4 className='text-xl font-semibold text-black'>New Set</h4>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-y-5 max-w-xl'>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter a topic" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Content</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Insert the content you wish to questionrize here..."
                                        {...field}
                                        rows={10}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="">
                        <Button disabled={isLoading} className='rounded-full gap-1'>
                            {isLoading ? <Loader className='size-4 animate-spin' /> : null}
                            <span>Save Set</span>
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}

export default SetForm