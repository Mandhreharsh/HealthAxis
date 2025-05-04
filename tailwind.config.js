/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend:{
      backgroundImage: {Frame: "url('images/Frame.png')", 
                        Frame2: "url('images/Frame2.png')", 
                        workbg: "url('images/workbg.png')", 
                        Loginbg: "url('images/login.png')", 
                        Doctorsbg: "url('images/doctorsbg.png')",
                        bgfooter: "url('images/footer.png')",
                      },
      fontFamily: {
      mullish: ["Mulish", "sans-serif"],
    },
    colors: {
      deepBlue: "#02042a",
      lightBlue: "#CBD6FF",
      darkBlue: "#8F9DFF",
      lightBlue200: "#DDE7FF",
      violet: "#AFBBFF",
      bgBlue: "#D7E3FF",
      buttonBlue: "#ABB6FF",
      lightBlue200: "#D7E3FF",
      violet200: "#C4C1FF",
      lightBlue100: "#A8F1FF",
      lightBlue50: "#D9F6FF",
      violet50: "#E4E4FF",
      violet500: "#D0D2FF",
      lightBlue500: "#9BB3FB",
      violet100: "#E2DFFF",
      borderbg: "#EDEDED"
    },
  },
  },
  plugins: [],
}

