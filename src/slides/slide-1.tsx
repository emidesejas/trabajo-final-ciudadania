import { motion } from "framer-motion"

export default function Slide1() {
  return (
    <motion.div 
      initial={{ opacity: 1, rotate: 300, scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex justify-center items-center"
    >
      <h1 className="font-bold text-5xl text-center">
        ¿Qué es Chat GPT?
      </h1>
    </motion.div>
  )
}