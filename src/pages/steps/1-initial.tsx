import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "~/components/ui/button"

export default function Slide1() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 1, rotate: 300, scale: 0 }}
        transition={{ staggerChildren: 0.7, rotate: 360, scale: 1 }}
        animate={{ rotate: 360, scale: 1 }}
        // exit={{ opacity: 0 }}
        className="w-full flex flex-col lg:gap-5 justify-center items-center backdrop-blur-sm bg-white/10 rounded-lg shadow-lg p-20 hover:backdrop-blur transition-all hover:shadow-xl"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl text-center text-white-ish"
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
        
        <Link href={`/steps/2-what-is`}>
          <Button className="text-xl transition-all hover:scale-110 active:scale-105 active:bg-slate-300" size="lg" variant="outline" >¡Quiero saber!</Button>
        </Link>
      </motion.div>
    </>
  )
}