import styled from "styled-components";
import ErrorLabel from "../../ui/ErrorLabel";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 16rem 2fr 1.2fr;
  gap: 2.4rem;
  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

const Label = styled.label`
  font-weight: 200;
  font-size: var(--font-size-form);
  color: var(--color-form-label);
  font-family: var(--font-form-label);
  text-transform: uppercase;
`;

// const ErrorLabel = styled.span`
//   font-weight: 100;
//   font-size: 0.8rem;
//   color: var(--color-text-error);
//   font-family: var(--font-form-label);
// `;

export default function FormRow({ label, errorMsg, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {errorMsg && <ErrorLabel>{errorMsg}</ErrorLabel>}
    </StyledFormRow>
  );
}
