import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const facts = [
  // {
  //   title: "Nacimiento de Artigas",
  //   chatResponse: "Artigas nació en febrero del Año pasado",
  //   source: "Artigas nació el 19 de junio de 1764",
  //   sourceUrl: "https://es.wikipedia.org/wiki/Jos%C3%A9_Gervasio_Artigas"
  // },
  {
    title: "¿Cuántos países que empiecen con la letra Z existen?",
    chatResponse: `Existen cinco países cuyos nombres comienzan con la letra "Z":

    1. Zambia
    2. Zimbabue
    3. Zaire (hoy en día conocido como República Democrática del Congo)
    4. Zaire (nombre anterior de la República del Congo)
    5. Zanzíbar (territorio semiautónomo de Tanzania)`,
    source: `Existen tres países cuyos nombres comienzan con “Z”:

    1. Zambia
    2. Zimbabue
    3. Zaire (opcionalmente ya que hoy en día su nombre es diferente pero sólo una vez en la lista)`,
    sourceUrl: "http://enciclopedia.us.es/index.php/Países_del_mundo_A-Z"
  },
  {
    title: "¿1 es un número primo?",
    chatResponse: "Sí, el número 1 no se considera un número primo.",
    source: "No, el número 1 no se considera un número primo.",
    sourceUrl: "https://es.wikipedia.org/wiki/N%C3%BAmero_primo"
  },
  {
    title: "¿2023 es bisiesto?",
    chatResponse: `Sí, puedo confirmar que el año 2023 es un año bisiesto. Un año bisiesto es aquel que tiene un día adicional, conocido como el 29 de febrero, que se agrega al calendario para mantenerlo alineado con el tiempo astronómico. Los años bisiestos ocurren cada cuatro años, excepto en casos excepcionales. El año anterior bisiesto fue 2020, y el próximo será 2024.`,
    source: "El 2023 no es bisiesto.",
    sourceUrl: "https://es.wikipedia.org/wiki/A%C3%B1o_bisiesto"
  }
]

export const factsRouter = createTRPCRouter({
  randomFact: publicProcedure
    .query(() => {
      const p = new Promise<(typeof facts)[number]>((resolve) => {
        setTimeout(() => resolve(facts.at(Math.floor(Math.random() * facts.length))!), 1000);
      });
      return p;
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
