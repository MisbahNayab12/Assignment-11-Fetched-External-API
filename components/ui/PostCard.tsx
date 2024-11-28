import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const PostCard = ({ id, body, title }: { id: number, body: string, title: string }) => {
    return <Card>
        <CardHeader>
            <p className='text-gray-600'>{id}</p>
            <h1 className='text-amber-900'> Book: </h1> 
            <CardTitle>
                {title} </CardTitle>

        </CardHeader>
        <CardContent>
        <h1 className='text-amber-900'> Description: </h1> 
            <CardDescription>
                {body}
            </CardDescription>
        </CardContent>
        <h1 className='text-amber-900 text-center'> Published by: MN Writer</h1>
    </Card>
}

export default PostCard

