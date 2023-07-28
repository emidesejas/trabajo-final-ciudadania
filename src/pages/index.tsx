import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import Slide1 from "~/slides/slide-1";
import Slide2 from "~/slides/slide-2";
import Slide3 from "~/slides/slide-3";
import Slide4 from "~/slides/slide-4";
import Slide5 from "~/slides/slide-5";
import Slide6 from "~/slides/slide-6";
import Slide7 from "~/slides/slide-7";
import Slide8 from "~/slides/slide-8";
import Slide9 from "~/slides/slide-9";
import Slide10 from "~/slides/slide-10";

const TOTAL_SLIDES = 10;

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
      <main className="flex h-screen w-screen items-center justify-center">
        <AnimatePresence>
          {slide === 0 && <Slide1 />}
          {slide === 1 && <Slide2 />}
          {slide === 2 && <Slide3 />}
          {slide === 3 && <Slide4 />}
          {slide === 4 && <Slide5 />}
          {slide === 5 && <Slide6 />}
          {slide === 6 && <Slide7 />}
          {slide === 7 && <Slide8 />}
          {slide === 8 && <Slide9 />}
          {slide === 9 && <Slide10 />}
        </AnimatePresence>
        <Button className="absolute bottom-1 right-1" onClick={nextSlide}>
          Next
        </Button>
        <Button className="absolute bottom-1 left-1" onClick={prevSlide}>
          Prev
        </Button>
      </main>
    </>
  );
}
