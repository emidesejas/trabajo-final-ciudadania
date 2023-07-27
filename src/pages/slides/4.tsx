import { motion } from "framer-motion"

export default function Slide4() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col justify-center items-center gap-3 p-40"
    >
      <h1 className="font-bold text-5xl">
        ¿Qué riesgos implica su uso?
      </h1>
      <motion.p className="text-4xl mt-7 text-center">
        Chat GPT no razona lógicamente ni tiene inteligencia, sino que predice la siguiente palabra más acorde al contexto y a la pregunta realizada por el usuario.
        Esto resulta en distintos riesgos que implican usar esta herramienta:
      </motion.p>
    </motion.div>
  )
}