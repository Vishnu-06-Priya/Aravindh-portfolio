
import CertificateImg from '../assets/certificate.png'

export default function Certificate () {
    const config = {
        link: 'file:///C:/Users/Systems/Downloads/Course%20Completion%20%20Aravindh.pdf'
    }

    return <section id='certificate' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={CertificateImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Certificate</h1>
                <p className='pb-5'>You can view my Certificate <a className='btn' href={config.link} download> Download</a></p>
            </div>
        </div>
    </section>
}