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
        Muchas veces Chat GPT, en su afán de mantener una experiencia de conversación natural para el usuario, puede utilizar información no verificada o directamente incorrecta, lo que puede desencadenar malentendidos o toma de decisiones incorrectas para los usuarios que pueden resultar en daños, incluso físicos.
      </motion.p>
    </motion.div>
  )
}