import { motion } from "framer-motion";

export default function Slide0() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-10 flex flex-col items-center justify-center gap-3 rounded-lg bg-white/10 p-5 text-white shadow-lg backdrop-blur-sm transition-all hover:shadow-xl hover:backdrop-blur md:p-10 lg:mx-60 lg:p-20"
    >
      <h1 className="text-center text-2xl font-bold md:text-5xl">Privacidad</h1>

      <motion.p className="mt-7 text-center text-xl md:text-4xl">
        El modelo podría revelar información confidencial o de carácter sensible
        que le fue provista anteriormente en una conversación o incluso otras
        conversaciones.
      </motion.p>
    </motion.div>
  );
}
