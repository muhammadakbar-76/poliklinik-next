import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
    <h1 className='text-8xl font-bold text-center my-10'>Mari belajar tailwindcss</h1>
    <section className='mb-10 bg-red-200'>
      <div className='ml-8 mt-10 bg-blue-500'>Margin</div>
    </section>
    <section className='w-1/2'>
      <h2 className='h-screen'>Sizing</h2>
      <div className="w-1/2 bg-blue-500">tes</div>
    </section>
    <section className="max-w-4xl mx-auto text-center mb-10">
      <h2 className="font-serif text-4xl mb-4 font-semibold">Typhography & text-color</h2>
      <blockquote className="italic font-thin text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis molestiae mollitia esse velit sed sapiente eos laboriosam assumenda est reiciendis!
      </blockquote>
      <a href="#" className="underline font-semibold text-gray-400 hover:text-gray-800">Aye</a>
    </section>
    <section className="mb-10 text-center bg-green-200 min-h-screen">
      <h2 className="text-6xl p-10 bg-gradient-to-r from-blue-200 to-red-400 bg-clip-text text-transparent font-bold">Colors</h2>
        <div className="bg-gradient-to-r from-blue-200 via-red-200 to-yellow-200">Aye</div>
      <h2 className='mt-10 hover:mt-20 bg-blue-700'>Background Color</h2>
    </section>
    <Link href="/protected/utility2">
    <a className='pb-24'>Next</a>
    </Link>
    </>
  )
}

export default Home
