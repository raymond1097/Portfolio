import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>Passionate Web Developer</h3>

            <p className='text-muted-foreground'>I build websites with React.js, Tailwind CSS, and modern web tools, turning ideas into smooth, responsive experiences. I love bringing designs to life with clean code and creating interfaces that feel intuitive and enjoyable to use.</p>

            <p className='text-muted-foreground'>I’m passionate about making web experiences people actually like. Learning new tech, solving tricky problems, and finding creative ways to simplify digital experiences keeps me motivated and excited about every project I take on.</p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'>Get In Touch</a>

              <a href="/ABDULRAHMON-CV.pdf" target='_blank' className='px-6 py-4 rounded-xl border border-primary text-primary hover:bg-primary/20 transition-colors duration-300'>Download CV</a>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/20'>
                <Code className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Web Development</h4>
                  <p className='text-muted-foreground'>Creating responsive websites and web applications with frameworks.</p>
                </div>
              </div>
            </div>

            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/20'>
                <User className='h-6 w-6 text-primary'/>
                </div>
                <div className="text-left">
                  <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                  <p className='text-muted-foreground'>Designing intuitive user interfcaes and seamless user experiences.</p>
                </div>
              </div>
            </div>

            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/20'>
                <Briefcase className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Project Management</h4>
                  <p className='text-muted-foreground'>Leading projects from conception to completion with agile methodolies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection