import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: var(--font-size-form);
  color: var(--color-text-ivory);

  &::file-selector-button {
    font: inherit;
    font-weight: 300;
    padding: 0.8rem 1rem;
    margin-right: 1.2rem;
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    color: var(--color-text-white);
    border: 1px solid var(--color-primary-normal);
    background-color: var(--color-primary-normal);

    &:hover {
      color: var(--color-primary-hover);
      border: 1px solid var(--color-primary-hover);
      background-color: var(--color-bg-white);
    }
  }
`;

export default FileInput;
