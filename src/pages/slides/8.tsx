import { motion } from "framer-motion"

export default function Slide8() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col justify-center items-center gap-3 p-40"
    >
      <h1 className="font-bold text-5xl">
        Dependencia
      </h1>
      <motion.p className="text-4xl mt-7 text-center">
      Utilizar las capacidades de Chat GPT para resolver problemas de manera excesiva puede producir una disminución en la capacidad del propio usuario humano de hacerlo, lo que puede llevarlo a dificultades en el desempeño de tareas de la vida cotidiana o incluso en el relacionamiento con otras personas.
      </motion.p>
    </motion.div>
  )
}