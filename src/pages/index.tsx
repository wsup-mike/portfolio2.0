import Head from 'next/head'
import type {NextPage} from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Mike's Portfolio Site</title>
      </Head>
      <h1 className='text-blue-500 text-2xl'>Joaniss's Portfolio Page</h1>
      
    {/* Header */}
    <Header />
    {/* Hero */}
    <section id="hero" className='snap-start'>
      <Hero />
    </section>

    {/* About */}
    <section id="about" className='snap-center'>
      
    </section>

    {/* Experience */}
    <section id="experience" className='snap-center'>
    
    </section>

    {/* Skills */}
    <section id="skills" className='snap-center'>
    
    </section>

    {/* Projects */}
    <section id="projects" className='snap-center'>
    
    </section>

    {/* Contact Me */}
    <section id="contactMe" className='snap-center'>
    
    </section>

    </div>
  )
}
