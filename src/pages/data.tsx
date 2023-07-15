import Head from "next/head";
import { FactCard } from "~/components/FactCard";
import { Button } from "@components/ui/button"
import { api } from "~/utils/api";
import { LoadingFactCard } from "~/components/LoadingFactCard";
import { RotateCw } from "lucide-react"

export default function Home() {
  const fact = api.facts.randomFact.useQuery();

  return (
    <>
      <Head>
        <title>Trabajo final de Ciudadanía - Grupo 40</title>
        <link rel="icon" href="/sticker.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        {!fact.isFetching && fact.data ? <FactCard fact={fact.data} /> : <LoadingFactCard />}
        <Button className="mt-10 transition-all" onClick={() => void fact.refetch()} disabled={!fact.isInitialLoading && fact.isFetching}>
          {<RotateCw className={`mr-2 h-4 w-4 ${!fact.isInitialLoading && fact.isFetching ?  'animate-spin': '' }`} /> }
          Siguiente dato
        </Button>
      </main>
    </>
  );
}
