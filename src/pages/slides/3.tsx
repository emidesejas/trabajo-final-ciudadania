import { motion } from "framer-motion"

export default function Slide3() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col justify-center items-center gap-3 p-40"
    >
      <h1 className="font-bold text-5xl">
        ¿Por qué se hizo tan popular?
      </h1>
      <motion.p className="text-4xl mt-7 text-center">
        Una de las principales razones de la popularidad de Chat GPT es que simplemente hace un muy buen trabajo en responder preguntas de la vida cotidiana, manteniendo coherencia y buena ortografía. Este motivo hizo que muchas personas se sintieran cómodas utilizando la herramienta y por tanto potenciando su rápida adopción.
      </motion.p>
    </motion.div>
  )
}