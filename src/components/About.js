import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, I am Aravindh S. A software tester . 1+ years of diversed experience in Manual and Automation Testing using Selenium WebDriver with Java',   
    }
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-10'>{config.line1}</p>

            </div>
        </div>
    </section>
}