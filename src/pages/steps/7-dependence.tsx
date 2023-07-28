import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Slide8() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-3 flex flex-col items-center justify-center gap-3 rounded-lg bg-white/10 p-5 text-white shadow-lg backdrop-blur md:backdrop-blur-sm transition-all hover:shadow-xl md:hover:backdrop-blur md:p-10 lg:mx-60 lg:p-15"
    >
      <h1 className="text-center text-2xl font-bold md:text-5xl">
        Dependencia
      </h1>

      <motion.p className="text-center text-xl md:text-4xl">
        Utilizar esta herramienta de manera excesiva puede producir una
        disminución en la capacidad del propio usuario humano, lo que puede
        dificultar su desempeño de tareas de la vida cotidiana.
      </motion.p>
      <div className="text-black mt-3">
        <Link href={`/steps/8-wrong-use`}>
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
