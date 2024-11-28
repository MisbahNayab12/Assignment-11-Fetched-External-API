import React from 'react'
import PostCard from '@/components/ui/PostCard'
import Header from "./component/Header";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export interface Post{
  userId: number
  id: number
  title: string
  body: string
}

export default async function Home(){

  const response = await fetch("http://localhost:3000/api/external")
  if(!response.ok){
    return <div>
      Something went wrong
    </div>
  }

  const data = await response.json()
  const posts: Post[] = data.data

  return (
    <div>
      <Header />
      <div className='bg-lime-700'>
        <div className='flex justify-center items-center gap-8 p-5'>
        <Input className='w-3/6' placeholder='Enter your book name'/>
        <Button className='bg-sky-500 hover:bg-sky-400'> Create Post </Button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-8 gap-8'>
          {posts.map((post) => (
            <div key={post.id}>
              <PostCard
                id={post.id}
                body={post.body}
                title={post.title}
              />
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-white mt-2">
                Update Post
              </Button>
              <Button className="bg-red-600 hover:bg-red-400 text-white ml-7">
                Delete Post
              </Button>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}


// following code is Talha's original code and is kept here just for reference if in case something went wrong. if everything is ok, delete the following code:
// route.ts file code:
// import {NextResponse } from "next/server";

// const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts"

// export const GET = async () => {
//     const response =  await fetch(API_ENDPOINT)

//     if(!response.ok){
//         return NextResponse.json({success: false}, {status: 501})
//     }
   
//     const data = await response.json()

//     console.log(data)

//     return NextResponse.json({data: data}, {status: 200})
// }


// PostCard.tsx file code:
// import React from 'react'
// import {Post} from '@/app/page'
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
//   } from "@/components/ui/card"
  

// const PostCard = ({ id, body, title }: { id: number, body: string, title: string }) => {
//     return <Card>
//         <CardHeader>
//             <p>{id}</p>
//             <CardTitle> {title} </CardTitle>

//         </CardHeader>
//         <CardContent>
//             <CardDescription>
//                 {body}
//             </CardDescription>
//         </CardContent>
//     </Card>
// }

// export default PostCard


// page.tsx code:

// import React from 'react'
// import PostCard from '@/components/ui/PostCard'

// export interface Post{
//   userId: number
//   id: number
//   title: string
//   body: string
// }

// export default async function Home(){

//   const response = await fetch("http://localhost:3000/api/external")
//   if(!response.ok){
//     return <div>
//       Something went wrong
//     </div>
//   }

//   const data = await response.json()
//   const posts: Post[] = data.data

//   return (
//     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-8 gap-8'>
//       <h1> Welcome to my Channel </h1>
//       {posts.map((post) => (
//         <PostCard key={post.id}
//         id = {post.id}
//         body = {post.body}
//         title={post.title}
//         />
//       ))
//       }
//     </div>
//   )
// }

