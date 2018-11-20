const black = "#353535";
const blue = "#0057ff";
const lightGray = "#f6f6ff";

export default {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    black: black,
    blue: blue,
    lightGray: lightGray
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  breakpoints: ["40em", "52em", "64em"],
  fonts: {
    sans: "Roboto, sans-serif",
    mono: "Menlo, monospace"
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)"
  },
  Link: {
    textDecoration: "none",
    color: black,
    "&:visited": {
      color: black
    },
    "&:hover": {
      color: blue
    }
  }
};
