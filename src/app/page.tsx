"use client";
import { CardService } from "@/components/component/card-service";
import { GridBackgroundDemo } from "@/components/component/Hero";
import { Navbar } from "@/components/component/navbar";

export default function Home() {
  return (
    <main className="flex w-full text-white flex-col bg-[#06080D]  overflow-x-hidden">
      <Navbar />
      <GridBackgroundDemo />
      <CardService />
    </main>
  );
}
