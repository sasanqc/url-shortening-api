/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  theme: {
    extend: {},
    colors: {
      primary: "#2BD0D0",
      gray1: "#EFF1F7",
      gray2: "#9E9AA8",
      dark1: "#4B3F6B",
      dark2: "#3A3054",
      dark3: "#34313D",
    },
    fontSize: {
      xs: ["15px", "26px"],
      sm: ["16px", "33px"],
      base: ["18px", "33px"],
      lg: ["20px", "33px"],
      xl: ["22px", "33px"],
      "2xl": ["40px", "48px"],
      "3xl": ["42px", "48px"],
      "4xl": ["90px", "90px"],
    },
    fontFamily: {
      poppins: "'Poppins', sans serif",
    },
  },

  plugins: [],
};
// h1(80,90 ,700) -> (42,48,700) ,h2(40,48,700),(28,48,700) ,h3(22,33,700) p (22,36,500)->(18,30,500) (18,32,500) (16,28,500) (16,24,700) (15,26,500) (15,22,500),  (20,30 ,700)  (20,36,500) ,(15,22,700)

// desktop        mobile

// header
// h1 (80,90) ls:-2    //(42,48)
// h2 (40,48) ls:-1    //(40,48)
