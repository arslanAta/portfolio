import { motion } from "framer-motion"
import User from "../data/data"
const Projects = () => {
  const pathname = window.location.href
  return (
    <div className='pb-4 text-stone-200'>
      <h2 className='my-10 mt-20 text-center text-4xl'>Projects</h2>
      <div className="max-lg:px-4">
        {User.projects?.map((project, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="mb-8 flex max-lg:flex-wrap gap-4"
              key={index}>
              <div className="w-full lg:w-1/4">
                <img src={`${pathname}/${project.img}`} alt="" />
              </div>
              <div className="w-full lg:w-3/4 space-y-3">
                <h2 className="text-2xl">{project.name}</h2>
                <p className="text-justify">{project.description}</p>
                <div className="pt-2">
                  {project.technologies.map(techology=>{
                    return(
                      <span key={techology} className="mr-2 rounded p-2 bg-stone-900 text-sm font-medium text-stone-300">{techology}</span>
                    )
                  })}
                 
                </div>
              </div>
            </motion.div>
          )
        })}
        <hr />
      </div>
    </div>
  )
}

export default Projects