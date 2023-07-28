import { motion } from "framer-motion"

export default function Slide6() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col justify-center items-center gap-3 p-40"
    >
      <h1 className="font-bold text-5xl">
        Exactitud de la información
      </h1>
      <motion.p className="text-4xl mt-7 text-center">
        Chat GPT puede utilizar información no verificada o directamente incorrecta, esto puede llevar a malentendidos o toma de decisiones incorrectas.
      </motion.p>
    </motion.div>
  )
}