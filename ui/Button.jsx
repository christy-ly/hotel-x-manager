import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
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
    color: var(--color-secondary-001);
    background-color: var(--color-primary-001);

    &:hover {
      background-color: var(--color-primary-002);
    }
  `,
  secondary: css`
    color: var(--color-primary-003);
    background: var(--color-secondary-001);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-secondary-002);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  font-family: "Playfair Display", serif;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-primary-001);
  box-shadow: var(--shadow-sm);
  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variations]}
`;

Button.defaultProps = {
  size: "small",
  variations: "primary",
};
export default Button;
