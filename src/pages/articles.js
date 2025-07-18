/*
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import { motion, useMotionValue } from "framer-motion"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import article1 from "../../public/images/articles/create loading screen in react js.jpg"
import article3 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/smooth scrolling in reactjs.png"

const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event)  {
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-10);

  
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }




return (
  <Link href={link} target='_blank'>

  onMouseMove={handleMouse}
  onMouseLeave={handleMouseLeave}


      <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
      <FramerImage style={{x:x, y:y }} initial={{opacity:0}} whileInView={{opacity:1, transition:{duration: 0.2}}}
      ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'/>
      </Link>
)
}

const Article = ({img, title, date, link}) => {
  return(
    <motion.li
     initial={{y:200}} whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
     className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-b-4 dark:border-light dark:bg-dark  dark:text-light sm:flex-col '>
      <MovingImg title={title} img={img} link={link} />
      <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
    </motion.li>
  )
}


const FeaturedArticle = ({img, title, time, summary, link}) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' />
                <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                    <FramerImage src={img} alt={title} className='w-full h-auto'  whileHover={{scale:1.05}} transition={{duration:0.2}}
                    priority
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                    />
                </Link>
                <Link href={link} target="_blank">
                    <h2 className='capitalize text-2xl font-bold my-2 hover:underline xfa-spintext-lg'>{title}</h2>
                </Link>
                <p className='text-sm mb-2'>{summary}</p>
                <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}


const articles = () => {
  return (
    <>
      <Head>
          <title>Sidharth Kumar | Articles Page</title>
          <meta name="description" content='any description' />
          </Head>

          <TransitionEffect />
          
          <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Layout className='pt-16'>
                
                <AnimatedText text="Words Can Change the World!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
            <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                <FeaturedArticle
  title=""
  summary=""
  time=""
  link="/"
  img={article1 }

                />
                 <FeaturedArticle
  title=""
  summary=""
  time=""
  link="/"
  img={article2 }

                />
            </ul>
            <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
            <Article 
            title=''
            date=''
            link=""
            img={article3}

            />
            </Layout>
            
          </main>
    </>
  )
}

export default articles;
*/

import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import { motion, useMotionValue } from "framer-motion"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import article1 from "../../public/images/articles/create loading screen in react js.jpg"
import article3 from "../../public/images/articles/pagination component in reactjs.jpg"
import article2 from "../../public/images/articles/smooth scrolling in reactjs.png"

const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX - 100); // Adjust offset for better positioning
    y.set(-100);
  }

  function handleMouseLeave() {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }

  return (
    <Link 
      href={link} 
      target='_blank'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
      <FramerImage 
        style={{x, y}} 
        initial={{opacity:0}} 
        whileInView={{opacity:1, transition:{duration: 0.2}}}
        ref={imgRef} 
        src={img} 
        alt={title} 
        className='z-10 w-96 h-auto hidden absolute rounded-lg shadow-xl md:!hidden'
      />
    </Link>
  )
}

const Article = ({img, title, date, link}) => {
  return (
    <motion.li
      initial={{y: 200, opacity: 0}}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeInOut"
        }
      }}
      viewport={{ once: true }}
      className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col'
    >
      <MovingImg title={title} img={img} link={link} />
      <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
    </motion.li>
  )
}

const FeaturedArticle = ({img, title, time, summary, link}) => {
  return (
    <motion.li 
      className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ 
        scale: 1,
        opacity: 1,
        transition: { duration: 0.4 }
      }}
      viewport={{ once: true }}
    >
      <motion.div 
        className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light'
        whileHover={{
          x: 5,
          y: 5,
          transition: { duration: 0.3 }
        }}
      />
      
      <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage 
          src={img} 
          alt={title} 
          className='w-full h-auto'  
          whileHover={{scale:1.05}} 
          transition={{duration:0.2}}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>
      
      <Link href={link} target="_blank">
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline lg:text-xl'>{title}</h2>
      </Link>
      
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
    </motion.li>
  )
}

const Articles = () => {
  return (
    <>
      <Head>
        <title>Sidharth Kumar | Articles Page</title>
        <meta name="description" content='Articles about web development and programming' />
      </Head>

      <TransitionEffect />
      
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText 
            text="Words Can Change the World!" 
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' 
          />
          
          <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
            <FeaturedArticle
              title="Create Loading Screen in React JS"
              summary="Learn how to create beautiful loading screens in React with modern animation techniques and best practices."
              time="5 min read"
              link="/"
              img={article1}
            />
            <FeaturedArticle
              title="Smooth Scrolling in React"
              summary="Implement buttery smooth scrolling experiences in your React applications with these techniques."
              time="8 min read"
              link="/"
              img={article2}
            />
          </ul>
          
          <motion.h2 
            className='font-bold text-4xl w-full text-center my-16 mt-32'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            All Articles
          </motion.h2>
          
          <ul>
            <Article 
              title='Pagination Component in ReactJS'
              date='March 22, 2023'
              link="/"
              img={article3}
            />
            {/* Add more articles here */}
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default Articles;