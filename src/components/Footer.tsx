import LinkedInIcon from '../assets/icons/LinkedInIcon'

const Footer = () => {
    return (
        <div className='py-10'>
            <h1 className='text-4xl text-center mb-6'>Get in touch</h1>
            <div className='flex justify-center items-center gap-2'>
                <LinkedInIcon size={20}/>
                <a href="/" className='text-stone-300'>LinkedIn</a>
            </div>
        </div>
    )
}

export default Footer