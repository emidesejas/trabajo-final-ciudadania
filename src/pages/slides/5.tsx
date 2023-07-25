import { motion } from "framer-motion"

export default function Slide5() {
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
        El funcionamiento interno de Chat GPT no implica ningún tipo de razonamiento lógico o inteligente en las respuestas brindadas. Si bien en algunas se pueden observar razonamientos y conclusiones que denotan inteligencia, lo cierto es que Chat GPT fue entrenado para predecir la siguiente palabra más acorde al contexto y la pregunta realizada por el usuario.
        Esta naturaleza fría y poco humana resulta en una variedad de riesgos que implican usar esta herramienta. Los riesgos se califican en las siguientes categorías:
      </motion.p>
    </motion.div>
  )
}