import { motion } from "framer-motion"

export default function Slide7() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col justify-center items-center gap-3 p-40"
    >
      <h1 className="font-bold text-5xl">
        Sesgos
      </h1>
      <motion.p className="text-4xl mt-7 text-center">
        Si el conjunto de datos con el que fue entrenado posee algún tipo de sesgo en algún ámbito, el texto generado a partir del mismo también lo tendrá. Por esto no se debería asumir la imparcialidad total de sus respuestas.
      </motion.p>
    </motion.div>
  )
}