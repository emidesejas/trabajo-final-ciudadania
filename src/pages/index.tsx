import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "~/components/ui/button";


export default function Home() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      
      className="text-white flex flex-col mx-3 md:mx-10 lg:mx-60 justify-center items-center gap-3 backdrop-blur md:backdrop-blur-sm bg-white/10 rounded-lg shadow-lg p-5 md:p-10 lg:p-15 md:hover:backdrop-blur transition-all hover:shadow-xl"
    >
      <h1 className="font-bold text-2xl md:text-5xl text-center">
        ¡Hola!
      </h1>
      <motion.p className="text-xl md:text-4xl  text-center">
        Este es el proyecto final del <span className="font-bold">Grupo 40</span> para la materia <span className="font-bold">Construcción de Ciudadanía en Entornos Digitales</span>.
        Nuestro objetivo es concientizar acerca del uso de las nuevas <span className="font-bold">inteligencias artificiales</span> que están surgiendo y se encuentran en su máximo auge.
      </motion.p>
      <div className="text-black flex flex-col sm:flex-row gap-2 sm:gap-10 mt-3 items-center">
        <Link href={`/about`}>
          <Button className="md:text-xl transition-all hover:scale-110 active:scale-105 active:bg-slate-300" size="lg" variant="outline" >Saber más del proyecto</Button>
        </Link>
        <Link href={`/steps/1-initial`}>
          <Button className="md:text-xl transition-all hover:scale-110 active:scale-105 active:bg-slate-300" size="lg" variant="outline" >Realizar el tour</Button>
        </Link>
      </div>
    </motion.div>
  );
}
