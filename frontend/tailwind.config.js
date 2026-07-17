/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  darkMode: "class",
  prefix: "tw-",

  content: [
    "./index.html",
    "./src/**/*.{vue,ts}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "4rem",
      },
    },

    extend: {
      /* -------------------------------------------------------------------------- */
      /* Fonts                                                                       */
      /* -------------------------------------------------------------------------- */

      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        body: ["Inter", "sans-serif"],
      },

      /* -------------------------------------------------------------------------- */
      /* Colors                                                                      */
      /* -------------------------------------------------------------------------- */

      colors: {
        primary: {
          DEFAULT: "#6E2132",
          hover: "#5B1927",
          active: "#47131F",
          disabled: "#A66D7A",
        },


        accent: {
          DEFAULT: "#C8A96A",
        },

        background: {
          DEFAULT: "#FAF7F2",
          subtle: "#F5F1EB",
          muted: "#EEE8DF",
        },

        surface: {
          DEFAULT: "#FFFFFF",
          elevated: "#FCFBF8",
          muted: "#F8F6F2",
        },

        text: {
          primary: "#2E2E2E",
          secondary: "#666666",
          muted: "#8D8174",
          disabled: "#B7AA9B",
          inverse: "#FFFFFF",
        },

        border: {
          DEFAULT: "#E7E2DA",
          strong: "#D8D2C7",
          focus: "#6E2132",
        },

        success: "#4C7A5A",
        warning: "#D79B2E",
        error: "#C44545",
        info: "#3A7CA5",

        overlay: "rgba(0,0,0,0.45)",
      },

      /* -------------------------------------------------------------------------- */
      /* Border Radius                                                               */
      /* -------------------------------------------------------------------------- */

      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },

      /* -------------------------------------------------------------------------- */
      /* Shadows                                                                     */
      /* -------------------------------------------------------------------------- */

      boxShadow: {
        xs: "0 1px 2px rgba(0,0,0,0.03)",
        sm: "0 2px 8px rgba(0,0,0,0.05)",
        md: "0 8px 24px rgba(0,0,0,0.08)",
        lg: "0 16px 40px rgba(0,0,0,0.10)",
        xl: "0 24px 60px rgba(0,0,0,0.12)",
      },

      /* -------------------------------------------------------------------------- */
      /* Typography                                                                  */
      /* -------------------------------------------------------------------------- */

      fontSize: {
        xs: ["12px", "18px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "30px"],
        "2xl": ["24px", "34px"],
        "3xl": ["30px", "40px"],
        "4xl": ["36px", "46px"],
        "5xl": ["48px", "58px"],
      },

      /* -------------------------------------------------------------------------- */
      /* Animation                                                                   */
      /* -------------------------------------------------------------------------- */

      transitionDuration: {
        fast: "150ms",
        DEFAULT: "250ms",
        slow: "350ms",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      /* -------------------------------------------------------------------------- */
      /* Z Index                                                                     */
      /* -------------------------------------------------------------------------- */

      zIndex: {
        dropdown: "1000",
        sticky: "1010",
        fixed: "1020",
        drawer: "1030",
        modal: "1040",
        popover: "1050",
        tooltip: "1060",
        toast: "1070",
      },
    },
  },

  plugins: [],
};