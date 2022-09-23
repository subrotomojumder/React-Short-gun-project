/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#b1a0ef",
        
"secondary": "#97f4c1",
        
"accent": "#bc0b84",
        
"neutral": "#271E34",
        
"base-100": "#F5F3F7",
        
"info": "#4999E9",
        
"success": "#2DC885",
        
"warning": "#BC8810",
        
"error": "#F33A30",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
