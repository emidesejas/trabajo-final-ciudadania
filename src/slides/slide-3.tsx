import { motion } from "framer-motion"

export default function Slide1() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex justify-center items-center"
    >
      <h1 className="font-bold text-5xl">
        ¿Por qué se hizo tan popular?
      </h1>
    </motion.div>
  )
}