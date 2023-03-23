import Head from 'next/head'
import type {NextPage} from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import CSSPractice from '@/components/CSSPractice';

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-pink-400 scrollbar-thumb-teal-600'>
      <Head>
        <title>Mike's Portfolio Site</title>
      </Head>

    {/* Header */}
    <Header />
    {/* Hero */}
    <section id="hero" className='snap-start'>
      <Hero />
    </section>

    {/* About */}
    <section id="about" className='snap-center'>
      <About />
    </section>


    {/* Experience */}
    <section id="experience" className='snap-center'>
      <WorkExperience />
    </section>

    {/* Skills */}
    <section id="skills" className='snap-start'>
      <Skills />
    </section>

    {/* Projects */}
    <section id="projects" className='snap-start'>
      <Projects />
    </section>

    {/* Contact Me */}
    <section id="contact" className='snap-start'>
      <ContactMe />
    </section>
    <section id="csspractice" className='snap-start'>
      <CSSPractice />
    </section>
    
    
    

    
    <Link href='#hero'>
      <div className='sticky bottom-5 cursor-pointer h-10 w-10 rounded-full bg-orange-500 hover:bg-purple-500 z-10 ml-2'>
        <p className='text-xs text-center'>Home</p>
      </div>
    </Link>
    
{/* 
    <footer className='sticky bottom-5 w-full  '>
    <Link href='#hero'>
      <div className='cursor-pointer h-10 w-10 rounded-full bg-orange-500 hover:bg-purple-500 z-10 ml-2'>
        <p className='text-xs text-center'>Home</p>
      </div>
    </Link>
    </footer> */}
    
    </div>
  )
}
