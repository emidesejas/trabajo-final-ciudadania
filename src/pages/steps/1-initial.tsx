import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "~/components/ui/button"

export default function Slide1() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 1, rotate: 300, scale: 0 }}
        transition={{ staggerChildren: 0.7, rotate: 360, scale: 1 }}
        animate={{ rotate: 360, scale: 1 }}
        className="w-fit flex flex-col gap-3 lg:gap-5 justify-center items-center backdrop-blur md:backdrop-blur-sm bg-white/10 rounded-lg shadow-lg p-5 sm:p-10 md:p-15 lg:p-20 md:hover:backdrop-blur transition-all hover:shadow-xl"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl sm:text-3xl text-center text-white-ish"
        >
          Alguna vez te preguntaste
        </motion.h1>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-bold text-3xl sm:text-5xl text-center text-white-ish"
        >
          ¿Qué es Chat GPT?
        </motion.h1>
        
        <Link href={`/steps/2-what-is`}>
          <Button className="text-lg sm:text-xl transition-all hover:scale-110 active:scale-105 text-black hover:text-black bg-white hover:bg-gray-200 active:bg-gray-400" size="lg" variant="outline" >¡Quiero saber!</Button>
        </Link>
      </motion.div>
    </ div>
  )
}