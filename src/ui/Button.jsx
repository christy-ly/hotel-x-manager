import styled, { css } from "styled-components";

const sizes = {
  xs: css`
    margin: 0.1rem;
    font-size: 0.6rem;
    padding: 0.2rem 0.4rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  small: css`
    font-size: 0.8rem;
    padding: 0.6rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.2rem;
    padding: 1rem 1.2rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.4rem;
    padding: 1.2rem 2rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    border: 1px solid var(--color-primary-normal);
    background-color: var(--color-bg-white);
    color: var(--color-primary-normal);

    &:hover {
      border: 1px solid var(--color-primary-normal);
      background-color: var(--color-primary-normal);
      color: var(--color-bg-white);
    }
  `,
  secondary: css`
    border: 1px solid var(--color-primary-normal);
    background-color: var(--color-primary-normal);
    color: var(--color-bg-white);

    &:hover {
      border: 1px solid var(--color-primary-normal);
      background-color: var(--color-bg-white);
      color: var(--color-primary-normal);
    }
  `,
  danger: css`
    border: 1px solid var(--color-red-800);
    background-color: var(--color-bg-white);
    color: var(--color-red-800);
    &:hover {
      border: 1px solid var(--color-red-800);
      background-color: var(--color-red-800);
      color: var(--color-bg-white);
    }

    &:disabled {
      border: 1px solid var(--color-bg-ivory);
      background-color: var(--color-red-800);
      color: var(--color-bg-white);
    }
  `,
};

const Button = styled.button`
  font-family: var(--font-button);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  size: "small",
  variation: "primary",
};

export default Button;
