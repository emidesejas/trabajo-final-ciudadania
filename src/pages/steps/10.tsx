import { motion } from "framer-motion"

export default function Slide0() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col justify-center items-center gap-3 p-40"
    >
      <h1 className="font-bold text-5xl">
        Privacidad
      </h1>
      <motion.p className="text-4xl mt-7 text-center">
        El modelo podría revelar información confidencial o de carácter sensible que le fue provista anteriormente en una conversación o incluso otras conversaciones.
      </motion.p>
    </motion.div>
  )
}