import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function Slide4() {
  const router = useRouter();
  const { didKnow } = router.query;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-10 flex flex-col items-center justify-center gap-3 rounded-lg bg-white/10 p-5 text-white shadow-lg backdrop-blur-sm transition-all hover:shadow-xl hover:backdrop-blur md:p-10 lg:mx-60 lg:p-20"
    >
      <h1 className="text-center text-2xl font-bold md:text-5xl">
        {didKnow
          ? "¿Sabías que riesgos implica su uso?"
          : "¿Qué riesgos implica su uso?"}
      </h1>

      <motion.p className="mt-7 text-center text-xl md:text-4xl">
        Chat GPT no razona lógicamente ni tiene inteligencia, sino que predice
        la siguiente palabra más acorde al contexto y a la pregunta realizada
        por el usuario.
        <div className="text-black">
          <Link href={`/steps/5-accuracy`}>
            <Button
              className="text-xl transition-all hover:scale-110 active:scale-105 active:bg-slate-300"
              size="lg"
              variant="outline"
            >
              Quiero conocer los riesgos
            </Button>
          </Link>
        </div>
      </motion.p>
    </motion.div>
  );
}
