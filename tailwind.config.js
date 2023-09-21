/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E4CABC',
        secondary: '#A383FF',
        button: '#8BD3DD'
      },
      width:{
        form: '1600px',
      },
      margin: {
        content: '2800px'
      }
    }
  },
  plugins: []
}
