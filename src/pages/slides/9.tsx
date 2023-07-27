import { motion } from "framer-motion"

export default function Slide9() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col justify-center items-center gap-3 p-40"
    >
      <h1 className="font-bold text-5xl">
        Uso indebido
      </h1>
      <motion.p className="text-4xl mt-7 text-center">
        Dada la gran capacidad de generar respuestas coherentes para un contexto dado, Chat GPT puede ser usado fácilmente para generar contenido falso o engañoso, brindándole nuevas herramientas a personas mal intencionadas.
      </motion.p>
    </motion.div>
  )
}