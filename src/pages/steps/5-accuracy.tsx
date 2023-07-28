import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Slide6() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-10 flex flex-col items-center justify-center gap-3 rounded-lg bg-white/10 p-5 text-white shadow-lg backdrop-blur-sm transition-all hover:shadow-xl hover:backdrop-blur md:p-10 lg:mx-60 lg:p-20"
    >
      <h1 className="text-center text-2xl font-bold md:text-5xl">
        Exactitud de la información
      </h1>

      <motion.p className="mt-7 text-center text-xl md:text-4xl">
        Chat GPT puede utilizar información no verificada o directamente
        incorrecta, esto puede llevar a malentendidos o toma de decisiones
        incorrectas.
        <div className="text-black">
          <Link href={`/steps/6-biases`}>
            <Button
              className="text-xl transition-all hover:scale-110 active:scale-105 active:bg-slate-300"
              size="lg"
              variant="outline"
            >
              Botón provisorio
            </Button>
          </Link>
        </div>
      </motion.p>
    </motion.div>
  );
}
