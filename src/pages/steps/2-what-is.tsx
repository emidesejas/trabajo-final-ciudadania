import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "~/components/ui/button"

export default function Slide2() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      
      className="text-white flex flex-col mx-10 lg:mx-60 justify-center items-center gap-3 backdrop-blur-sm bg-white/10 rounded-lg shadow-lg p-5 md:p-10 lg:p-20 hover:backdrop-blur transition-all hover:shadow-xl"
    >
      <h1 className="font-bold text-2xl md:text-5xl text-center">
        ¿Qué es Chat GPT?
      </h1>
      <motion.p className="text-xl md:text-4xl mt-7 text-center">
        Es una Inteligencia Artificial capaz de simular y mantener conversaciones humanas en lenguaje natural.
      </motion.p>
      <div className="text-black">
        <Link href={`/steps/3-popularity`}>
          <Button className="text-xl transition-all hover:scale-110 active:scale-105 active:bg-slate-300" size="lg" variant="outline" >¡No sabía!</Button>
        </Link>
        <Link href={`/steps/4-risks?didKnow=true`}>
          <Button className="text-xl transition-all hover:scale-110 active:scale-105 active:bg-slate-300" size="lg" variant="outline" >¡Ya sabía!</Button>
        </Link>
      </div>
    </motion.div>
  )
}