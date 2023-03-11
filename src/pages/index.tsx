import Head from 'next/head'
import type {NextPage} from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mike's Portfolio Site</title>
      </Head>
      <h1 className='text-blue-500 text-2xl'>Joaniss's Portfolio Page</h1>
      
    {/* Header */}
    <Header />
    {/* Hero */}
    <section id="hero">
      <Hero 
        
      />
    </section>

    {/* About */}

    {/* Experience */}

    {/* Skills */}

    {/* Project */}

    {/* Contact Me */}

    </div>
  )
}
