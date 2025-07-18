import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from "framer-motion"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import project11 from "../../public/images/projects/png2jpg/Ai-Calculator.jpg"
import project10 from "../../public/images/projects/png2jpg/bg_removal.jpg"
import project4 from "../../public/images/projects/png2jpg/brain.jpg"
import project13 from "../../public/images/projects/png2jpg/deepseek.jpg"
import project3 from "../../public/images/projects/png2jpg/flappy bird.jpg"
import project7 from "../../public/images/projects/png2jpg/foodomania.jpg"
import project12 from "../../public/images/projects/png2jpg/iphone.jpg"
import project8 from "../../public/images/projects/png2jpg/jarvis.jpg"
import project9 from "../../public/images/projects/png2jpg/Loop.jpg"
import project6 from "../../public/images/projects/png2jpg/mcq.jpg"
import project5 from "../../public/images/projects/png2jpg/mi.jpg"
import project2 from "../../public/images/projects/png2jpg/netflix.jpg"
import project1 from "../../public/images/projects/png2jpg/tomato.jpg"




const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) =>{

  return (
    <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem' />
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <FramerImage src={img} alt={title} className='w-full h-auto'  whileHover={{scale:1.05,rotateX: 5,rotateY: -5,transition:{type:"spring",stiffness:300,damping:15}}} transition={{duration:0.2}}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>

        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'><GithubIcon /> </Link>
          <Link href={link} target='_blank' 
          className='ml-4 rounded-lg bg-black text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
          sm:px-4 sm:text-base'>Visit Project</Link>
        </div>
      </div>
    </article>


  )
}

const Project = ({title, type, img, link, github}) =>{

  return(
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05,rotateX: 5,rotateY: -5,transition:{type:"spring",stiffness:300,damping:15}}} transition={{duration:0.2}}/>
      </Link>

      <div className='w-full flex flex-col items-start justify-between pl-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-2xl'>{title}</h2>
        </Link>

       
        <div className='w-full mt-2 flex items-center justify-between'>
        <Link href={link} target='_blank' 
          className='text-lg font-semibold underline md:text-base'>Visit</Link>
          <Link href={github} target='_blank' className='w-8 md:w-6'>
          {" "}
          <GithubIcon />
          </Link>
          
        </div>
      </div>
    </article>

  )
}



const projects = () => {
  return (
    <>
      <Head> 
<title>Sidharth Kumar | Projects Page</title>
<meta name="description" content='any description' />
</Head>
<TransitionEffect />

<main className='w-full mb-16 flex flex-col items-center justify-normal dark:text-light'>
  <Layout className='pt-16'>
    <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
    <div className='col-span-12'>
    
    <FeaturedProject 
    title="Tomato-leaf Classifications"
    img={project1}
    summary="Used many NPM react packages and library for easily integrate with Deep learning model for Classification of 
Diseases and MongoDB and Cloudinary for database and storing image and result used for building user interfaces website 
where user upload  leaf image and help to predict the disease with help of CNN and Deep learning model"
    link="https://github.com/Sidharthkrsharma/Tomato-leaf-classification.git"
    github="https://github.com/Sidharthkrsharma/Tomato-leaf-classification.git"
    type="Featured Project"
    />
    </div>


    <div className='col-span-6 '>
    <FeaturedProject
    title="Netflix Clone"
    img={project2}
    summary="Used many NPM react packages and libraries to build attractive user interface"
    link="https://netflix-clone-two-lake-16.vercel.app"
    github="https://github.com/Sidharthkrsharma/Netflix-Clone.git"
    type="Featured Project"
    />

    </div>
    <div className='col-span-6 '>
    <FeaturedProject
    title="Flappy Bird Ai"
    img={project3}
    summary="The results of training an AI using NEAT (NeuroEvolution of Augmenting Topologies) to play 
Flappy Bird and Used many libraries like Pandas, Pygame etc.
"
    link="https://github.com/Sidharthkrsharma/flappy-bird-Ai.git"
    github="https://github.com/Sidharthkrsharma/flappy-bird-Ai.git"
    type="Featured Project"
    />

    </div>
 
    <div className='col-span-12'>
    <FeaturedProject
    title="Brain-Tumor Classification using CNN"
    img={project4}
    summary="Predict the Tumor via MRI and Created web pages with help Flask framework to build attractive user and used many library for Train and Test 
the Model in 10 Epochs for Better Understanding."
    link="https://github.com/Sidharthkrsharma/BrainTumor_Classification_using-CNN.git"
    github="https://github.com/Sidharthkrsharma/BrainTumor_Classification_using-CNN.git"
    type="Featured Project"
    />
    </div>

    <div className='col-span-6 '>
      <FeaturedProject
    title="MI Store Clone"
    img={project5}
    summary="Clone of MI Store website"
    link="https://mi-store-clone-psi.vercel.app/"
    github="https://github.com/Sidharthkrsharma/mi-store-clone.git"
    type="Featured Project"
    />
    </div>

    <div className='col-span-6'>
    <FeaturedProject
    title="IPhone 15 Clone"
    img={project12}
    summary="Clone of iPhone 15 HomePage Using 3D.js "
    link="https://iphone-15-homepage.vercel.app/"
    github="https://github.com/Sidharthkrsharma/Iphone_15-Homepage"
    type="Featured Project"/>
    </div>
    
    <div className='col-span-12'>
    <FeaturedProject 
    title="FoodoMania"
    img={project7}
    summary="Foodomania is a dynamic web application designed to help users explore and discover a variety of recipes. The platform provides an intuitive user interface where visitors can browse, search, and filter recipes based on categories, ingredients, or cuisine types. Built with a focus on user experience, Foodomania is optimized for both desktop and mobile use, ensuring accessibility across different devices."
    link="https://foodomania-frontend.onrender.com"
    github="https://github.com/Sidharthkrsharma/FoodoMania"
    type="Featured Project"
    />
    </div>

<div className='col-span-6 '>
    <FeaturedProject
    title="Jarvis"
    img={project8}
    summary="It is Virtual Assistant JARVIS used JavaScript to build some features to catch the command while speaking to users"
    link="https://play-with-jarvis.vercel.app"
    github="https://github.com/Sidharthkrsharma/Play-With-Jarvis"
    type="Featured Project"
    />
    </div>

<div className='col-span-6'>
    <FeaturedProject
    title="Microsoft Loop Clone"
    img={project9}
    summary="Created a Microsoft Loop Clone and used Clark Authentication and integrated with Gemini Ai  "
    link="https://microsoft-loop-clone-sepia.vercel.app/"
    github="https://github.com/Sidharthkrsharma/Microsoft-Loop-Clone"
    type="Featured Project"
    />
    </div>

    <div className='col-span-12'>
    <FeaturedProject 
    title="BG Removal"
    img={project10}
    summary="Web application designed to help users to upload images and remove or replace the background using image processing techniques, often leveraging AI models"
    link="https://bgremoval-alpha.vercel.app"
    github="https://github.com/Sidharthkrsharma/BG_Removal"
    type="Featured Project"
    />
    </div>

    <div className='col-span-12'>
    <FeaturedProject
    title="Ai Calculator"
    img={project11}
    summary="Created AI-Powered Calculator, inspired by the innovative iPad Math Notes/Calculator application that uses AI to recognize handwritten math equations and solve them"
    link="https://ai-calculator-1w44.vercel.app"
    github="https://github.com/Sidharthkrsharma/Ai-Calculator"
    type="Featured Project"
    />
    </div>

    <div className='col-span-6 '>
    <Project
    title="MCQ Quiz App"
    img={project6}
    summary="Create the UI page and widget which will display the contents of MCQ"
    link="https://github.com/Sidharthkrsharma/MCQ-App.git"
    github="https://github.com/Sidharthkrsharma/MCQ-App.git"
    type="Project"
    />
    </div>

        <div className='col-span-6 '>
    <Project
    title="DeepSeek AI Clone"
    img={project13}
    summary="Create Clone of DeepSeek AI"
    link="https://deepseek-sidharthkrsharmas-projects.vercel.app/"
    github="https://github.com/Sidharthkrsharma/deepseek"
    type="Project"
    />
    </div>

    </div>
  </Layout>
</main>
    </>
  )
}

export default projects
