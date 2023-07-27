import { motion } from "framer-motion"

export default function Slide2() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col justify-center items-center gap-3 p-40"
    >
      <h1 className="font-bold text-5xl text-center">
        ¿Qué es Chat GPT?
      </h1>
      <motion.p className="text-4xl mt-7 text-center">
        Es una Inteligencia Artificial capaz de simular y mantener conversaciones humanas en lenguaje natural.
      </motion.p>
      {/* <motion.p className="text-2xl text-center">
        Fue desarrollada por <a href="https://openai.com/">OpenAI</a> y utiliza su modelo propietario denominado Transformador Generativo Pre-Entrenado o más comúnmente conocido como GPT por sus siglas en inglés.
      </motion.p> */}
    </motion.div>
  )
}