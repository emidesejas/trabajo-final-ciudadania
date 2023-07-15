import { AnimatePresence } from "framer-motion"
import Head from "next/head"
import { useState } from "react"

import { Button } from "~/components/ui/button";
import Slide1 from "~/slides/slide-1";
import Slide2 from "~/slides/slide-2";
import Slide3 from "~/slides/slide-3";

const TOTAL_SLIDES = 3;

export default function Home() {

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide === TOTAL_SLIDES - 1) {
      setSlide(0);
    } else {
      setSlide((current) => current + 1);
    }
  };

  const prevSlide = () => {
    if (slide === 0) {
      setSlide(TOTAL_SLIDES - 1);
    } else {
      setSlide((current) => current - 1);
    }
  };
  
  return (
    <>
      <Head>
        <title>Trabajo final de Ciudadanía - Grupo 40</title>
        <link rel="icon" href="/sticker.png" />
      </Head>
      <main className="h-screen w-screen flex justify-center items-center">
        <AnimatePresence>
          {slide === 0 && <Slide1 />}
          {slide === 1 && <Slide2 />}
          {slide === 2 && <Slide3 />}
        </AnimatePresence>
        <Button className="absolute bottom-1 right-1" onClick={nextSlide}>Next</Button>
        <Button className="absolute bottom-1 left-1" onClick={prevSlide}>Prev</Button>
      </main>
    </>
  )
}