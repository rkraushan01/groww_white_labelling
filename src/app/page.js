'use client'
import Image from "next/image";
import { ThemeProvider } from "@/context/UserContext";
import Hero from "@/components/Hero";

export default function Home() {
  return (
   <ThemeProvider>
    
   <Hero/>
   </ThemeProvider>
  );
}
