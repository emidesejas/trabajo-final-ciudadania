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
        Hace un muy buen trabajo en responder preguntas de la vida cotidiana de forma coherente, por lo que muchas personas se sienten cómodas utilizando la herramienta.
      </motion.p>
    </motion.div>
  )
}