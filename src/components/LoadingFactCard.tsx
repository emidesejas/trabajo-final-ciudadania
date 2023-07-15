import { Skeleton } from "@components/ui/skeleton"

export const LoadingFactCard = () => 
  (
    <div className="rounded-lg border-solid border-2 border-black flex flex-col justify-center items-center p-5 shadow-lg hover:scale-105 transition-all hover:shadow-xl hover:shadow-slate-300">
      <Skeleton className="w-[200px] h-[28px] rounded-full"/>
      <Skeleton className="w-[250px] h-[28px] rounded-full mt-4"/>
      <Skeleton className="w-[130px] h-[28px] rounded-full mt-1"/>
      <p className="text-lg font-bold mt-6">Pero ChatGPT opina que:</p>
      <Skeleton className="w-[200px] h-[26px] rounded-full mt-3"/>
    </div>
  )