import Head from "next/head";
import type { ReactNode } from "react";
import { ThemeProvider } from "./ui/theme-provider";

const Header = () => (
  <Head>
    <title>Trabajo final de Ciudadanía - Grupo 40</title>
    <link rel="icon" href="/brain-circuit.png" />
    <meta name="description" content="Trabajo final de Construcción de Ciudadanía en Entornos Digitales - Grupo 40" />
    <meta content="chatgpt, chat, gpt, inteligencia artificial, artificial intelligence, riesgos, ia, ai, llm" name="keywords" />
    <meta content="Trabajo final de Construcción de Ciudadanía en Entornos Digitales - Grupo 40" property="og:title" />
    <meta content="https://trabajo-final-ciudadania.vercel.app/" property="og:url"/>
    <meta content="article" property="og:type"/>
    <meta content="Trabajo final de Construcción de Ciudadanía en Entornos Digitales - Grupo 40" property="og:description" />
  </Head>
);

const Layout = ({ children }: { children: ReactNode }) => {
  return (    
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Header />
      <main className={`flex flex-col justify-center items-center bg-tech_background bg-cover`}>
        <div className="grow flex flex-col justify-center items-center">
          {children}
        </div>
      </main>
    </ThemeProvider>
  );
}

export { Layout };
