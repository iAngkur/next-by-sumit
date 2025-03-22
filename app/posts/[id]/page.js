import Comments from '@/app/components/Comments';
import getPost from '@/lib/getPost';
import getPostComment from '@/lib/getPostComments';
import React, { Suspense } from 'react'

export async function generateMetadata({ params }) {

  const post = await getPost(params.id);

  return {
    title: post.title,
    description: post.body,
  }
}

export default async function PostDetail({ params }) {
  const { id } = params;

  const postPromise = getPost(id);
  const commentsPromise = getPostComment(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  const post = await postPromise;

  return (
    <div className='mt-6'>
      <h2 className='text-sm md:text-xl text-blue-500 font-bold'>{post.id} - {post.title}</h2>
      <p>{post.body}</p>
      <hr />

      <Suspense fallback={<div>Loading comments...</div>}>
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  )
}
