import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";

const DialogWithData = ({ title, content }: { title: string; content: string }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button
        className="bg-white text-black hover:bg-gray-200 hover:text-black active:bg-gray-400"
        variant="outline"
      >
        {title}
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-xl">{title}</DialogTitle>
        <DialogDescription className="text-lg">
          {content}
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="flex flex-col gap-6 text-white backdrop-blur px-3 md:px-20 lg:px-40 pb-5 md:pb-10 lg:pb-20 pt-5 md:pt-10 lg:pt-10"
    >
      <Link href="/" className="flex hover:font-bold transition-all">
        <ArrowLeft />
        <p className="ml-1">Volver</p>
      </Link>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold">
          Trabajo Final Construcción de Ciudadanía en Entornos Digitales
        </h1>
        <h2 className="text-2xl">Grupo 40</h2>
      </div>
      <section>
        <h1 className="text-2xl font-bold">Introducción</h1>
        <p>
          Este informe contiene el resultado de nuestra investigación acerca de
          Chat GPT, a qué se debe su fama actualmente, los riesgos asociados a
          su uso y estrategias para difundir nuestro proyecto a los usuarios de
          este tipo de productos y a la población en general.
        </p>
      </section>
      <section>
        <h1 className="text-2xl font-bold">Objetivo</h1>
        <p>
          Nuestro objetivo es contribuir a las distintas sociedades modernas a
          utilizar herramientas digitales de manera responsable. Para ello,
          pretendemos informar a la población general acerca de qué son las
          nuevas inteligencias artificiales que están en auge y qué riesgos
          tiene el uso de las mismas. De esa forma logramos generar conciencia
          colectiva e individual favoreciendo así el juicio crítico de cada
          individuo a la hora de utilizar o simplemente opinar acerca de estas
          herramientas.{" "}
        </p>
      </section>
      <section>
        <h1 className="text-2xl font-bold">¿Qué es Chat GPT?</h1>
        <p>
          Es una Inteligencia Artificial capaz de simular y mantener
          conversaciones humanas en lenguaje natural. Fue desarrollada por
          OpenAI y utiliza su modelo propietario denominado Transformador
          Generativo Pre-Entrenado o más comúnmente conocido como GPT por sus
          siglas en inglés. Forma parte de una familia de modelos de aprendizaje
          profundo llamados LLM (Large Language Models, Modelos de Lenguaje
          Grandes) que han sido desarrollados e investigados por múltiples
          empresas de la era moderna.
        </p>
      </section>
      <section>
        <h1 className="text-2xl font-bold">
          ¿Por qué explotó? ¿Por qué se hizo tan popular?
        </h1>
        <p>
          Una de las principales razones de la popularidad de Chat GPT es que
          simplemente hace un muy buen trabajo en responder preguntas de la vida
          cotidiana, manteniendo coherencia y buena ortografía. Este motivo hizo
          que muchas personas se sintieran cómodas utilizando la herramienta y
          por tanto potenciando su rápida adopción.{" "}
        </p>
        <p>
          Además, tiene la capacidad de entender el contexto de la conversación
          y producir respuestas con razonamientos complejos a partir de este.
        </p>
      </section>
      <section>
        <h1 className="text-2xl font-bold">¿Qué riesgos implica su uso?</h1>
        <p>
          El funcionamiento interno de Chat GPT no implica ningún tipo de
          razonamiento lógico o inteligente en las respuestas brindadas. Si bien
          en algunas se pueden observar razonamientos y conclusiones que denotan
          inteligencia, lo cierto es que Chat GPT fue entrenado para predecir la
          siguiente palabra más acorde al contexto y la pregunta realizada por
          el usuario. Esto puede resultar confuso para el usuario promedio, pues
          no es evidente que una herramienta de predicción de texto pueda
          generar razonamientos complejos. Esta naturaleza fría y poco humana
          resulta en una variedad de riesgos que implican usar esta herramienta.
        </p>
        <div className="md:ml-5 mt-5">
          <h2 className="text-lg font-bold">
            Decidimos clasificarlos en las siguientes categorías:
          </h2>
          <div className="md:ml-5 mt-2 flex flex-wrap gap-3">
            <DialogWithData
              title="Exactitud de la información"
              content="Muchas veces Chat GPT, en su afán de mantener una experiencia de conversación natural para el usuario, puede utilizar información no verificada o directamente incorrecta, lo que puede desencadenar malentendidos o toma de decisiones incorrectas para los usuarios que pueden resultar en daños, incluso físicos."
            />
            <DialogWithData
              title="Sesgos"
              content="Chat GPT y otros modelos de lenguaje similares dependen fuertemente del conjunto de datos con el que fue entrenado. Si este conjunto de datos posee algún tipo de sesgo en algún ámbito, el texto generado a partir del mismo también lo tendrá. Esto es peligroso porque muchos usuarios asumen la imparcialidad total de este tipo de modelos, mientras que siguen dependiendo fuertemente de la organización que realizó su entrenamiento y está encargada de actualizarlo."
            />
            <DialogWithData
              title="Dependencia"
              content="Utilizar las capacidades de Chat GPT para resolver problemas de manera excesiva puede producir una disminución en la capacidad del propio usuario humano de hacerlo, lo que puede llevarlo a dificultades en el desempeño de tareas de la vida cotidiana o incluso en el relacionamiento con otras personas."
            />
            <DialogWithData
              title="Uso indebido"
              content="Dada la gran capacidad de generar respuestas coherentes para un contexto dado, este tipo de modelos puede ser usado fácilmente para generar contenido falso o engañoso, brindándole nuevas herramientas a personas mal intencionadas."
            />
            <DialogWithData
              title="Privacidad"
              content="Como mencionamos anteriormente, Chat GPT no tiene un razonamiento lógico e inteligente detrás de sus respuestas, lo que puede resultar en que el modelo revele información confidencial o de carácter sensible que le fue provista anteriormente en una conversación o incluso otras conversaciones."
            />
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-2xl font-bold">
          ¿Cómo podemos difundir nuestro proyecto?
        </h1>
        <p>
          Volviendo a nuestro objetivo, para lograr el mayor alcance debemos
          implementar una estrategia que nos permita alcanzar la mayor cantidad
          de personas, de manera transparente y amigable. Para ello nos parece
          sensato que junto con nuestra página web se realicen las siguientes
          estrategias:
        </p>
        <div className="md:ml-5 mt-5 flex flex-wrap gap-3">
          <DialogWithData
            title="Campaña publicitaria con creadores de contenido"
            content="Los creadores suelen tener un gran alcance y muchos logran transmitir confianza a su público. Por ello, creemos adecuada la realización de una campaña de concientización utilizando el material provisto por nuestra página. Dicha campaña deberá estar constituida de material audiovisual en formato corto, similar a lo que se puede ver en redes sociales como Instagram y TikTok. También, el uso de publicaciones en Twitter y Facebook pueden lograr que el público alcanzado sea mayor. Tanto los materiales audiovisuales como las publicaciones en formato texto deberán incluir links a la página, para que aquellos usuarios que deseen informarse en profundidad puedan hacerlo."
          />
          <DialogWithData
            title="Optimización para motores de búsqueda"
            content="También conocida como SEO por sus siglas en inglés (Search Engine Optimization), es una herramienta que permite a los motores de búsqueda, como Google, mostrar a nuestra página como resultado relevante cuando el usuario busca un término relacionado a los de nuestro interés. Esto se puede implementar utilizando metadatos en la página web con palabras como: ChatGPT, Chat, GPT, Inteligencia Artificial, Artificial Intelligence, Riesgos, IA, AI, LLM. También mencionar brevemente que es importante tener en cuenta métricas como: tiempo de carga de la página, tiempo que la página demora en ser interactiva (que el usuario puede interactuar con el contenido), desplazamiento del contenido una vez cargado, etc."
          />
          <DialogWithData
            title="Creación de redes sociales asociadas a la página"
            content={`Una estrategia similar a la campaña con los creadores de contenido, es crear una "marca" o ponerle un  nombre al movimiento que pretendemos generar para concientizar. Al tener un nombre asociado es fácil registrarlo en las distintas redes sociales como Instagram, TikTok, Twitter y Facebook. Teniendo cuentas en estas plataformas, se pueden realizar publicaciones con cierta periodicidad, permitiendo generar un rol más activo de parte de los usuarios, puesto que podrán interactuar con las publicaciones y compartirlas de manera más sencilla. Esto generaría más "tracción" del tema entre las personas más jóvenes.`}
          />
          <DialogWithData
            title="Charlas y exposiciones"
            content="Las estrategias anteriores cubren mayoritariamente al público joven y adulto. Sin embargo, es importante no olvidarse de la población más joven y más mayor. Para poder concientizar en estos grupos sociales nos parece razonable proporcionar charlas y exposiciones en centros educativos y en hogares de adultos mayores."
          />
          <DialogWithData
            title="Participación en eventos"
            content="Hoy en día ya existen muchos eventos vinculados a la inteligencia artificial y el desarrollo de nuevas herramientas vinculadas. Estos eventos se pueden aprovechar para establecer un punto informativo con folletos y códigos QR a la página, para poder informar a las personas que se acercan a este mundo de manera presencial."
          />
        </div>
      </section>
    </motion.div>
  );
}
