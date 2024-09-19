import { motion } from "framer-motion"

const Technologies = () => {

    return (
        <div>
            <h2 className="text-4xl text-center my-20">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}>
                    <motion.div
                        initial={{ y: -10 }}
                        animate={{
                            y: [10, -10],
                            transition: {
                                duration: 1.5,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: 'reverse'
                            }
                        }}
                    >
                        <img src="../img/react.png" alt="" className="size-24" />
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}>
                    <motion.div
                        initial={{ y: -10 }}
                        animate={{
                            y: [10, -10],
                            transition: {
                                duration: 1.5,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: 'reverse'
                            }
                        }}
                    >
                        <img src="../img/js.png" alt="" className="size-24" />
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}>
                    <motion.div
                        initial={{ y: -10 }}
                        animate={{
                            y: [10, -10],
                            transition: {
                                duration: 1.5,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: 'reverse'
                            }
                        }}
                    >
                        <img src="../img/tailwind.png" alt="" className="size-24" />
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}>
                    <motion.div
                        initial={{ y: -10 }}
                        animate={{
                            y: [10, -10],
                            transition: {
                                duration: 1.5,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: 'reverse'
                            }
                        }}
                    >
                        <img src="../img/redux.png" alt="" className="size-24" />
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}>
                    <motion.div
                        initial={{ y: -10 }}
                        animate={{
                            y: [10, -10],
                            transition: {
                                duration: 1.5,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: 'reverse'
                            }
                        }}
                    >
                        <img src="../img/github.png" alt="" className="size-24" />
                    </motion.div>
                </motion.div>
            </div>

        </div>
    )
}
export default Technologies;