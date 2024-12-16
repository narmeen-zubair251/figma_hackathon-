import { Miniver } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

     
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter','sans-serif'],
        GreatVibes:['Great Vibes' , 'sans-serif'],
        Helvetica:['Helvetica' ,'sans-serif'],
        Miniver:['Miniver' ,'sans-serif']
      },

      
      screens:{
        'xs' : "480px",
        'sm' : "640px",
        'md' :"768px",
        'lg' : "1024px",
        'xl' : "1280px",
        '2xl': "1536px",
        'custom':"1400px",

      }
    },
  },
  plugins: [],
};
export default config;
