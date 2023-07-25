import { motion } from "framer-motion"

export default function Slide1() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 1, rotate: 300, scale: 0 }}
        transition={{ staggerChildren: 0.7, rotate: 360, scale: 1 }}
        animate={{ rotate: 360, scale: 1 }}
        // exit={{ opacity: 0 }}
        className="w-full h-full flex flex-col lg:gap-12 justify-center items-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-bold text-5xl text-center text-white-ish"
        >
          Alguna vez te preguntaste
        </motion.h1>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-bold text-5xl text-center text-white-ish"
        >
          ¿Qué es Chat GPT?
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-bold text-5xl text-center text-white-ish"
        >
          ¡Nosotros te contamos!
        </motion.h1>
      </motion.div>
    </>
  )
}