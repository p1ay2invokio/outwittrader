import type { Config } from "tailwindcss";
import flowbite from 'flowbite-react/tailwind'

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/page.tsx",
    "./app/news/forex/page.tsx",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        'mobile': '380px'
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
} satisfies Config;