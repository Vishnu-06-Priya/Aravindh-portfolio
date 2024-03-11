import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        title: 'I am Aravindh S',
        subtitle: 'I am a Software Tester',
        social: {
            
            linkedin: 'https://www.linkedin.com/in/aravindh-s-y03067539?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIe%2BGumvISk%2Bi7lWeVV7tOQ%3D%3D'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>S</span> ARAVINDH
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
