/** @type {import('tailwindcss').Config} */
export const content = [
  "./resources/*.html",
  "./resources/*.js",
  // "./src/"
];
export const theme = {
  purge: [
    "./resources/*.html",
    "./resources/*.js"
  ],
  extend: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      gold: '#FFCB74',
      black: "111111",
      gray: "2F2F2F",
      white: "F6F6F6"
    },
  },
};
export const plugins = [];

