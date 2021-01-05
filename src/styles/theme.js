const theme = {
  lightTheme: {
    colors: {
      VeryLightGray: "hsl(0, 0%, 98%)",
      VeryLightGrayishBlue: "hsl(236, 33%, 92%)",
      TextColor: "hsl(233, 11%, 84%)",
      HoverColor: "hsl(236, 9%, 61%)",
      primary: {
        colors:{
          BrightBlue: "hsl(220, 98%, 61%)",
          CheckBackground: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        }
      }
    },
    transition: "0.5s",
  },
  darkTheme: {
    colors: {
      VeryDarkBlue: "hsl(235, 21%, 11%)",
      FormColor: "hsl(235, 24%, 19%)",
      TextColor: "hsl(234, 39%, 85%)",
      HoverColor: "hsl(236, 33%, 92%)", /*hover*/
      BodyColor: "hsl(240, 20%, 12%)",
      primary: {
        colors:{
          BrightBlue: "hsl(220, 98%, 61%)",
          CheckBackground: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        }
      }
    },
    transition: "0.5s",
  },
};

export default theme;