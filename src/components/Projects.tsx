import { motion } from "framer-motion"
const Projects = () => {
  return (
    <div className='pb-4 text-stone-200'>
      <h2 className='my-10 mt-20 text-center text-4xl'>Projects</h2>
      <div className="max-lg:px-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mb-8 flex max-lg:flex-wrap gap-4">
          <div className="w-full lg:w-1/4">
            <img src="../img/index1.webp" alt="" />
          </div>
          <div className="w-full lg:w-3/4 space-y-3">
            <h2 className="text-2xl">Admin Dashoard for management system</h2>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquam ullam autem? Impedit et omnis sit quos, natus minus consequatur quod recusandae exercitationem nesciunt ducimus aliquam? Cupiditate nemo mollitia earum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. In numquam commodi molestiae iure velit doloremque eum natus omnis aperiam, quasi sunt, harum eius, mollitia temporibus. Dolorum a adipisci eius! Possimus?</p>
            <div className="pt-2">
              <span className="mr-2 rounded p-2 bg-stone-900 text-sm font-medium text-stone-300">React</span>
              <span className="mr-2 rounded p-2 bg-stone-900 text-sm font-medium text-stone-300">TailwindCSS</span>
              <span className="mr-2 rounded p-2 bg-stone-900 text-sm font-medium text-stone-300">Redux</span>
              <span className="mr-2 rounded p-2 bg-stone-900 text-sm font-medium text-stone-300">MUI</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mb-8 flex max-lg:flex-wrap gap-4">
          <div className="w-full lg:w-1/4">
            <img src="../img/index2.webp" alt="" />
          </div>
          <div className="w-full lg:w-3/4 space-y-3">
            <h2 className="text-2xl">Landing website for technological center</h2>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aliquam ullam autem? Impedit et omnis sit quos, natus minus consequatur quod recusandae exercitationem nesciunt ducimus aliquam? Cupiditate nemo mollitia earum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. In numquam commodi molestiae iure velit doloremque eum natus omnis aperiam, quasi sunt, harum eius, mollitia temporibus. Dolorum a adipisci eius! Possimus?</p>
            <div className="pt-2">
              <span className="mr-2 rounded p-2 bg-stone-900 text-sm font-medium text-stone-300">React</span>
              <span className="mr-2 rounded p-2 bg-stone-900 text-sm font-medium text-stone-300">TailwindCSS</span>
              <span className="mr-2 rounded p-2 bg-stone-900 text-sm font-medium text-stone-300">Redux</span>
              <span className="mr-2 rounded p-2 bg-stone-900 text-sm font-medium text-stone-300">MUI</span>
            </div>
          </div>
        </motion.div>
        <hr />
      </div>
    </div>
  )
}

export default Projects