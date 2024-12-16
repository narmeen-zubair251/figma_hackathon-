import type { Metadata } from "next";
import {Inter ,   Miniver } from "next/font/google";
import { Great_Vibes } from "next/font/google"; 

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const inter =Inter
({
  subsets: ['latin'],
  weight:['400' , '700']

})
 
const greatVibes = Great_Vibes
({
  subsets: ['latin'],
  weight:['400' ]

})

const miniver = Miniver
({
  subsets: ['latin'],
  weight:['400' ]

})





export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className ={`${inter.className} ${greatVibes.className} ${miniver.className}`}
      > <Header/>
        {children }
         <Footer/>
      </body>
    </html>
  );
}