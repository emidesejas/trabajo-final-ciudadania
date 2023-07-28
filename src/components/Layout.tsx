import Head from "next/head";
import { usePathname } from 'next/navigation'
import type { ReactNode } from "react";
import { Button } from "~/components/ui/button";
import Link from "next/link";

const TOTAL_SLIDES = 10;

const Header = () => (
  <>
    <Head>
      <title>Trabajo final de Ciudadanía - Grupo 40</title>
      <link rel="icon" href="/sticker.png" />
    </Head>
  </>
);

const PresentationButtons = () => {
  const pathname = usePathname()

  const result = pathname.match(/\/slides\/(\d+)/);
  const currentPage = result ? parseInt(result?.[1] ?? "0") : 0;

  const next = currentPage === TOTAL_SLIDES ? 1 : currentPage + 1;
  const prev = currentPage === 1 ? TOTAL_SLIDES : currentPage - 1;

  return (
    result &&
      <div className="w-full flex justify-between p-4">
        <Link href={`/slides/${prev}`}>
          <Button className="" >Prev</Button>
        </Link>
        <Link href={`/slides/${next}`}>
          <Button className="" >Next</Button>
        </Link>
      </div>
  );
}

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className={`h-screen w-screen flex flex-col justify-center items-center bg-tech_background bg-cover`}>
        <div className="grow flex flex-col justify-center items-center">
          {children}
        </div>
        <PresentationButtons />
      </main>
    </>
  );
}

export { Layout };
