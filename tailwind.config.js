/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',  // Ajuste para onde seus arquivos HTML e JS estão localizados
    './public/**/*.{html,js}', // Inclua se você tiver arquivos públicos
    './index.html' // Se você tiver um arquivo HTML específico na raiz
  ],
  theme: {
    fontFamily:{
      'sans': ['Roboto', 'sans-serif']

    },
    extend: {
      backgroundImage: {
        "home": "url('/assets/bg.png')"
      }
    },
  },
  plugins: [],
}
