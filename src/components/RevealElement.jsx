import { motion } from 'motion/react'

const RevealElement = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 'full' }}
      transition={{ ease: 'easeInOut', duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

export default RevealElement