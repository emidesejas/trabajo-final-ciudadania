import type { RouterOutputs } from "~/utils/api"

type Fact = RouterOutputs["facts"]["randomFact"]

export const FactCard = ({ fact }: { fact: Fact }) => 
  (
    <div className="rounded-lg border-solid border-2 border-black flex flex-col justify-center items-center p-5 shadow-lg hover:scale-105 transition-all hover:shadow-xl hover:shadow-slate-300 max-w-md">
      <h3 className="text-xl font-bold">{fact.title}</h3>
      <p className="text-lg text-gray-700 mt-4">{fact.source}</p>
      {fact.sourceUrl && <a className="text-lg text-blue-400 underline" href={fact.sourceUrl}>según esta fuente.</a>}

      <p className="text-lg font-bold mt-6">Pero ChatGPT opina que:</p>
      <p className="text-gray-700 font-bold mt-3">{fact.chatResponse}</p>
    </div>
  )