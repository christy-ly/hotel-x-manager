import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {

    --color-border-black: #333;
    --color-border-white: #fff;
    --color-border-golden: #e0aa14;

    --color-text-black: #333;
    --color-text-white: #fff;

    --color-bg-black: #333;
    --color-bg-white: #ccc;

    --diabaled-bg: #ccc;
    --diabaled-color: #fff;
    --diabaled-dark-bg: #f5f5f5;
    --diabaled-dark-color: rgba(0, 0, 0, 0.25);

    --color-primary-color: #e0aa14;
    --color-primary-active: #cc9a0d;
    --color-primary-hover: #f6bc19;

    --color-primary-color: #e0aa14;
    --color-primary-active: #cc9a0d;
    --color-primary-hover: #f6bc19;

    /* Grey */
    --color-grey-0: #fffff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

}
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

/* Creating animations for dark mode */
transition: background-color 0.3s, border 0.3s;

html {
  font-size: 62.5%;
}

body {
    font-family: "Montserrat", "Verdana", "Helvetica", "Arial", "sans-serif";
    background: var(--color-bg-ivory);
    color: var(--color-dark);
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
}

input,
button,
textarea,
select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: none;
    border: none;
    outline: none;
}
button {
  cursor: pointer;
  background-color: transparent;
}

*:disabled {
  cursor: not-allowed;
}
}`;

export default GlobalStyles;
