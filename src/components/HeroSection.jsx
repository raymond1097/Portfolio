import { ArrowDown } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
      <div className='container max-w-4xl mx-auto text-center z-10'>
        <div className='space-y-6'>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
            <span className='opacity-0 animate-fade-in'>Hi, I'm </span>
            <span className='text-primary opacity-0 animate-fade-in-delay-1'>Abdulrahmon</span>
            <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-1'>Kajogbola</span>
          </h1>

          <p className='text-lg md:text-xl text-muted-foreground max-2-2zl max-auto opacity-0 animate-fade-in-delay-3'>I craft engaging web experiences using modern technologies. With a focus on front-end development, I build intuitive and visually appealing interfaces that combine seamless functionality with elegant design.</p>

          <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
            <a href="#projects" className='cosmic-button'>View My Work</a>
          </div>
        </div>
      </div>

      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
        <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
        <a href="#about"><ArrowDown className='h-5 w-5 text-primary'/></a>
      </div>
    </section>
  )
}

export default HeroSection