import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { Separator } from "~/components/ui/separator";

const DataContent = ({ prompt, response, fact, source }: { prompt: string, response: string, fact: string, source: string }) => (
  <div>
    <h1 className="text-md font-bold">Pregunta realizada</h1>
    <p className="text-sm font">{prompt}</p>
    <Separator className="my-1" />
    <h1 className="text-md font-bold">Respuesta obtenida</h1>
    <p className="text-sm">{response}</p>
    <Separator className="my-1" />
    <h1 className="text-md font-bold">Respuesta correcta</h1>
    <p className="text-sm">{fact}</p>
    <Separator className="my-1" />
    <Link href={source} target="_blank">
      <Button variant="outline">
        <ExternalLink className="mr-2 h-4 w-4"/> Fuente utilizada
      </Button>
    </Link>
  </div>
);

export default function Slide6() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mx-3 flex flex-col items-center justify-center gap-3 rounded-lg bg-white/10 p-5 text-white shadow-lg backdrop-blur md:backdrop-blur-sm transition-all hover:shadow-xl md:hover:backdrop-blur md:p-10 lg:mx-60 lg:p-15"
      >
        <h1 className="text-center text-2xl font-bold md:text-5xl">
          Exactitud de la información
        </h1>

        <motion.p className="text-center text-xl md:text-4xl">
          Chat GPT puede utilizar información no verificada o directamente
          incorrecta, esto puede llevar a malentendidos o toma de decisiones
          incorrectas.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 mt-3 items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="md:text-xl transition-all hover:scale-110 active:scale-105 text-black hover:text-black bg-white hover:bg-gray-200 active:bg-gray-400" size="lg" variant="outline" >Ver ejemplos</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Ejemplos de datos erróneos</DialogTitle>
                <DialogDescription>
                  Estos son algunos ejemplos de datos erróneos que pudimos recolectar de ChatGPT hasta la fecha en la que realizamos este proyecto (Junio 2023).
                </DialogDescription>
              </DialogHeader>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Años bisiestos</AccordionTrigger>
                  <AccordionContent>
                    <DataContent 
                      prompt="El año 2023 ¿es bisiesto?"
                      response="Sí, puedo confirmar que el año 2023 es un año bisiesto. Un año bisiesto es aquel que tiene un día adicional, conocido como el 29 de febrero, que se agrega al calendario para mantenerlo alineado con el tiempo astronómico. Los años bisiestos ocurren cada cuatro años, excepto en casos excepcionales. El año anterior bisiesto fue 2020, y el próximo será 2024."
                      fact="El 2023 no es bisiesto, de hecho la propia IA se contradice"
                      source="https://es.wikipedia.org/wiki/A%C3%B1o_bisiesto"
                    />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Matemáticas</AccordionTrigger>
                  <AccordionContent>
                    <DataContent
                      prompt="¿Cuánto da 2*6/9*4+2/6/5?"
                      response="El resultado de la expresión es 241/15 ~ 16,0666"
                      fact="El resultado de la expresión es 5,4"
                      source="https://www.wolframalpha.com/input?i=2*6%2F9*4%2B2%2F6%2F5&lang=es"
                    />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Contar letras</AccordionTrigger>
                  <AccordionContent>
                    <DataContent
                      prompt={`¿Cuantas letras tiene la palabra "electroencefalografista"?`}
                      response={`La palabra "electroencefalografista" tiene 25 letras.`}
                      fact={`La palabra "electroencefalografista" tiene 23 letras.`}
                      source="https://www.esquire.com/es/actualidad/libros/a40359213/palabras-mas-largas-espanol-castellano/"
                    />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Números primos</AccordionTrigger>
                  <AccordionContent>
                    <DataContent
                      prompt="El 1 ¿es un número primo?"
                      response="Sí, el número 1 es un número primo."
                      fact="El número 1 no se considera un número primo."
                      source="https://es.wikipedia.org/wiki/N%C3%BAmero_primo"
                    />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Países con Z</AccordionTrigger>
                  <AccordionContent>
                    <DataContent
                      prompt="¿Cuántos países que empiecen con la letra Z existen?"
                      response={`Hasta mi última actualización en septiembre de 2021, no existen países cuyos nombres comiencen con la letra "Z". En esa fecha, no había ningún país en el mundo cuyo nombre empezara con esa letra. Sin embargo, ten en cuenta que esta información puede cambiar con el tiempo debido a cambios políticos, formación o disolución de países, por lo que siempre es bueno verificar fuentes actualizadas para obtener la información más reciente.`}
                      fact="Existen 2 países que empiezan con Z: Zambia y Zimbabue."
                      source="https://es.wikipedia.org/wiki/Anexo:Pa%C3%ADses"
                    />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Duración del derecho de autor</AccordionTrigger>
                  <AccordionContent>
                    <DataContent
                      prompt="¿Cuál es la duración mínima del derecho de autor estipulada en virtud del Convenio de Berna?
                      a) 20 años contados a partir de la creación de la obra
                      b) 50 años contados a partir del año en que fallece el autor
                      c) 70 años contados a partir del año en que fallece el autor
                      d) 50 años contados a partir de la creación de la obra"
                      response="La duración mínima del derecho de autor estipulada en virtud del Convenio de Berna es la opción c) 70 años contados a partir del año en que fallece el autor."
                      fact="b) 50 años contados a partir del año en que fallece el autor"
                      source="https://www.wipo.int/wipolex/es/text/283694"
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </DialogContent>
          </Dialog>
          <Link href={`/steps/6-biases`}>
            <Button className="md:text-xl transition-all hover:scale-110 active:scale-105 text-black hover:text-black bg-white hover:bg-gray-200 active:bg-gray-400" size="lg" variant="outline" >Siguiente riesgo</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
