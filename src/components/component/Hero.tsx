import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import "../../app/style/styles.button.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import technologiesData, { IconData } from "@/app/data/tecno.ts/tecno";

export function GridBackgroundDemo() {
  return (
    <section className="w-full gap-6 flex-col mx-auto bg-gray-900 bg-grid-gray-700/[1.1] relative flex items-center text-center justify-center">
      <div className="flex flex-col pt-32 w-[420px] md:w-[700px] sm:w-[500px] items-center justify-center">
        <p className="text-4xl md:text-6xl sm:5xl font-semibold text-white">
          Vamos a llevar tu presencia en redes al siguiente nivel, ahorrándote tiempo y energía para invertirlo en aportar valor.
        </p>
        <p className="pt-11 hidden md:flex items-center justify-center w-full max-w-[600px]">
          Nos dedicamos a crear y escalar marcas personales desde 0, como lo hemos hecho antes, mediante sistemas de contenido estratégicos y estético. Adecuándose al máximo a tus propósitos y a tus necesidades.
        </p>
      </div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_top,transparent_8%,black)]"></div>
      <div className="flex p-10">
        <Link href="/contact">
          <Button className="button1">
            Contáctanos ahora
          </Button>
        </Link>
      </div>
      <div className="bg-black opacity-85 rounded-[400px] w-[380px] md:w-[500px] sm:w-[400px] mx-auto overflow-hidden">
        <div className="w-full max-w-[600px]">
          <Swiper
            id="devs-swiper"
            modules={[Autoplay]}
            freeMode={true}
            slidesPerView={3}
            loop={true}
            spaceBetween={60}
            speed={3400}
            direction={"horizontal"}
            autoplay={{
              delay: 800,
              disableOnInteraction: false,
            }}
          >
            {technologiesData.map((icon: IconData, index: number) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <icon.component />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
