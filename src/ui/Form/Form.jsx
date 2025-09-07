import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type !== "modal" &&
    css`
      padding: 2rem 4rem;

      /* Box */
      background-color: var(--color-bg-white);
      border: 1px solid var(--color-primary-normal);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  margin: 1rem;
  font-size: var(--font-size-form);
`;

export default Form;
