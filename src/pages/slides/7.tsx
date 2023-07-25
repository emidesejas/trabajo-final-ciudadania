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
        Chat GPT y otros modelos de lenguaje similares dependen fuertemente del conjunto de datos con el que fue entrenado. Si este conjunto de datos posee algún tipo de sesgo en algún ámbito, el texto generado a partir del mismo también lo tendrá. Esto es peligroso porque muchos usuarios asumen la imparcialidad total de este tipo de modelos, mientras que siguen dependiendo fuertemente de la organización que realizó su entrenamiento y está encargada de actualizarlo.
      </motion.p>
    </motion.div>
  )
}