import { notFound } from "next/navigation";

export default function BlogPage({ params }) {

  const { id } = params;

  if (id >= 4) {
    notFound();
  }

  return (
    <main className='mt-10'>
      <div>
        <h1 className='text-3xl font-bold'>Blog {params.id}</h1>
        <p className='mt-5'>This is the content for blog {params.id}.</p>
      </div>
    </main>
  )
}