import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Slide7() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-3 flex flex-col items-center justify-center gap-3 rounded-lg bg-white/10 p-5 text-white shadow-lg backdrop-blur md:backdrop-blur-sm transition-all hover:shadow-xl md:hover:backdrop-blur md:p-10 lg:mx-60 lg:p-15"
    >
      <h1 className="text-center text-2xl font-bold md:text-5xl">Sesgos</h1>

      <motion.p className="text-center text-xl md:text-4xl">
        Si el conjunto de datos con el que fue entrenado posee algún tipo de
        sesgo en algún ámbito, el texto generado a partir del mismo también lo
        tendrá. Por esto no se debería asumir la imparcialidad total de sus
        respuestas.
      </motion.p>
      <div className="text-black mt-3">
        <Link href={`/steps/7-dependence`}>
          <Button
            className="text-xl transition-all hover:scale-110 active:scale-105 active:bg-slate-300"
            size="lg"
            variant="outline"
          >
            Siguiente riesgo
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
