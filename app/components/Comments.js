import React from 'react'

export default async function Comments({ promise: commentsPromise }) {

  const comments = await commentsPromise;

  return (
    <div className='mt-6'>
      <h3 className='mt-6 text-lg font-bold'>Comments</h3>
      <ul>
        {comments?.map(comment => <li key={comment.id} className='border-1 mb-4 p-4'>
          <h4 className='text-blue-500 font-bold'>{comment.email}</h4>
          <p>{comment.body}</p>
        </li>)}
      </ul>
    </div>
  )
}
