import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Slide0() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-3 flex flex-col items-center justify-center gap-3 rounded-lg bg-white/10 p-5 text-white shadow-lg backdrop-blur md:backdrop-blur-sm transition-all hover:shadow-xl md:hover:backdrop-blur md:p-10 lg:mx-60 lg:p-15"
    >
      <h1 className="text-center text-2xl font-bold md:text-5xl">¡Gracias!</h1>

      <motion.p className="text-center text-xl md:text-4xl">
        Gracias por ser parte de nuestro proyecto, esperamos que te haya gustado y 
        te hayas podido informar acerca de las nuevas inteligencias artificiales.
      </motion.p>

      <div className="text-black flex flex-col sm:flex-row gap-2 sm:gap-10 mt-3 items-center">
        <Link href={`/about`}>
          <Button className="md:text-xl transition-all hover:scale-110 active:scale-105 active:bg-slate-300" size="lg" variant="outline" >Saber más del proyecto</Button>
        </Link>
        <Link href={`/steps/1-initial`}>
          <Button className="md:text-xl transition-all hover:scale-110 active:scale-105 active:bg-slate-300" size="lg" variant="outline" >Volver a hacer el tour</Button>
        </Link>
      </div>
    </motion.div>
  );
}
