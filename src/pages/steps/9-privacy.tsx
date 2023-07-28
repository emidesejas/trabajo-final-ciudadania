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
      <h1 className="text-center text-2xl font-bold md:text-5xl">Privacidad</h1>

      <motion.p className="text-center text-xl md:text-4xl">
        El modelo podría revelar información confidencial o de carácter sensible
        que le fue provista anteriormente en una conversación o incluso otras
        conversaciones.
      </motion.p>

      <div className="text-black mt-3">
        <Link href={`/steps/10-thanks`}>
          <Button className="md:text-xl transition-all hover:scale-110 active:scale-105 active:bg-slate-300" size="lg" variant="outline" >Finalizar el tour</Button>
        </Link>
      </div>
    </motion.div>
  );
}
