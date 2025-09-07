import styled from "styled-components";

const Input = styled.input`
  padding: 0.6rem 0.8rem;
  border: 1px solid var(--color-primary-normal);
  background-color: var(--color-bg-white);
  font-size: var(--font-size-form);

  &:disabled {
    border: none;
    padding: 0.6rem 0rem;
    color: var(--color-primary-normal);
  }
`;

export default Input;
