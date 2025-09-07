import styled, { css } from "styled-components";

export const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 1.5rem;
      font-weight: 400;
      margin: 2rem;
      font-family: var(--font-header-h1);
      letter-spacing: 0.8px;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 400;
      font-family: var(--font-header-h2);
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1rem;
      font-weight: 400;
      font-family: var(--font-header-h3);
    `}


  ${(props) =>
    props.as === "dialog" &&
    css`
      font-size: 1rem;
      font-weight: 400;
      font-family: var(--font-header-dialog);
    `}
`;

export default Heading;
