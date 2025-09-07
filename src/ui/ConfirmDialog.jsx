import styled from "styled-components";
import Button from "./Button";
import ErrorLabel from "../ui/ErrorLabel";
import { useState, useEffect } from "react";
import { sysAccessCode } from "../configs/env";

const StyledConfirmDialog = styled.div`
  width: 40rem;
  background: white;
  padding: 2rem;
  border-color: 3px solid var(--color-primary-active);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  & p {
    color: var(--color-text-black);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;
const StyleOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const StyledInput = styled.input`
  padding: 0.5rem 0.5rem;
  border: 1px solid var(--color-primary-normal);
  background-color: var(--color-bg-white);
  font-size: var(--font-size-form);
  text-align: center;
`;

function ConfirmDialog({ resourceName, onConfirm, onCancel }) {
  const text = `Confirm delete ${resourceName}?`;
  const [accessCode, setAccessCode] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(accessCode === sysAccessCode);
  }, [accessCode]);

  return (
    <StyleOverlay>
      <StyledConfirmDialog>
        <p>{text}</p>
        <div>
          <StyledInput
            type="text"
            placeholder="Enter access code"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
          />
        </div>

        <ErrorLabel>
          {accessCode.trim() !== "" && !isValid ? "Invalid Code" : ""}
        </ErrorLabel>

        <div>
          <Button variation="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button variation="danger" onClick={onConfirm} disabled={!isValid}>
            Confirm
          </Button>
        </div>
      </StyledConfirmDialog>
    </StyleOverlay>
  );
}

export default ConfirmDialog;
