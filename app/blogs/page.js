import Link from 'next/link';
import React from 'react'

function Blogs() {

  const blogs = [{
    id: 1,
    title: "Blog 1",
    content: "This is the content for blog 1."
  }, {
    id: 2,
    title: "Blog 2",
    content: "This is the content for blog 2."
  }, {
    id: 3,
    title: "Blog 3",
    content: "This is the content for blog 3."
  }]

  return (
    <main className='mt-10'>
      <div>
        <h1 className='text-3xl font-bold'>Blogs</h1>
        <ul className='flex flex-wrap gap-4 mt-5'>
          {blogs.map((blog) => (
            <li key={blog.id} className='mt-5 border w-1/3 p-4 flex-1 basis-64 '>
              <Link href={`/blogs/${blog.id}`}><h2 className='text-xl font-semibold cursor-pointer'>{blog.title}</h2></Link>
              <p className='mt-2'>{blog.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </main >
  )
}

export default Blogs;