import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className='pb-4 lg:mb-36'>
            <div className='flex flex-wrap lg:flex-row-reverse max-lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className='w-full lg:w-1/2'
                >
                    <div className='flex justify-center lg:p-8'>
                        <img src="/img/index.jpeg" alt="" className='rounded-lg h-full lg:size-96' />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start mt-10 '>
                        <h1 className='pb-2 text-4xl 2xl:text-5xl tracking-tighter text-white'>Arslan Atayew</h1>
                        <span className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl text-transparent'>Front End Developer</span>
                        <p className='text-stone-200 my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae similique velit tempora, ratione ea exercitationem quidem qui reiciendis quo tempore consequatur deleniti numquam possimus totam quasi, provident rerum est fuga vitae deserunt autem optio. Sit ex deserunt dolores soluta voluptate.
                        </p>
                        <a
                            href="/resume.pdf"
                            download
                            rel='noopener noreferrer'
                            className='bg-white p-4 text-sm text-stone-800 mb-10 rounded-full '
                        >
                            Download resume
                        </a>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Hero