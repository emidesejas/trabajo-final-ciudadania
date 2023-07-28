import { motion } from "framer-motion";

export default function Slide3() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-10 flex flex-col items-center justify-center gap-3 rounded-lg bg-white/10 p-5 text-white shadow-lg backdrop-blur-sm transition-all hover:shadow-xl hover:backdrop-blur md:p-10 lg:mx-60 lg:p-20"
    >
      <h1 className="text-center text-2xl font-bold md:text-5xl">
        ¿Por qué se hizo tan popular?
      </h1>

      <motion.p className="mt-7 text-center text-xl md:text-4xl">
        Hace un muy buen trabajo en responder preguntas de la vida cotidiana de
        forma coherente, por lo que muchas personas se sienten cómodas
        utilizando la herramienta.
      </motion.p>
    </motion.div>
  );
}
