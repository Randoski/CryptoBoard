/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: '#001b44',
        pry: '#E5E7EB',
        sec: '#9CA3AF',
        accent: '#3B82F6',
        border: '#334155',
        // Background Color: 
        // Primary Text Color — for readability against the dark background
        // Accent Color  — for highlights and call-to-action elements
        // Secondary Text Color — for less prominent text or secondary information
        // Border Color — for borders or dividers to provide subtle separation without harsh contrast
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

