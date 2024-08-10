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
        brand: '#0e8900',
        pry: '#4A4A4A',
        sec: '#ffffff',
        accent: '#b3d1ff',
        border: '#E5E7EB',

        // background: '#001b44',
        // pry: '#E5E7EB',
        // sec: '#9CA3AF',
        // accent: '#b3d1ff',
        // border: '#334155',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

