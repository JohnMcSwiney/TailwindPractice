/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    
    extend: {
      colors:{
        Trv_Purple: '#8650F4',
        Trv_Blue: '#0034C4',
        Trv_D_Blue: '#080C3D',
        Trv_Black: '#000000',
        Trv_White: '#FFFFFF'
        
      },

      fontFamily:{
        body: ['Poppins']
      },
      screens:{
        'phone_sm' : '300px',

        'phone_lg' : '370px'
        // {
        //   @media (min-width: 350px)
        // }
      }
      
    },
  },
  plugins: [],
}
