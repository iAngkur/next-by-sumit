import getAllPosts from '@/lib/getAllPosts';
import React from 'react'
import Link from 'next/link'

export default async function Posts() {

  const posts = await getAllPosts();

  return (
    <div className='mt-6'>
      <h1>All posts</h1>

      <ul>
        {posts.map(post => <li className='border-1 mb-4 p-4' key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h1 className='text-xl font-bold'>
              {post.title}
            </h1>
          </Link>
          <p>
            {post.body}
          </p>
        </li>)}
      </ul>
    </div>
  )
}
