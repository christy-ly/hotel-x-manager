import { useState } from "react";
import { useRemoveSuite } from "./hooks/useDeleteSuite";
import { formatCurrency } from "../../utils/helpers";
import { supabaseImageUrl } from "../../configs/env";
import styled from "styled-components";
import Button from "../Button";
import ConfirmDialog from "../ConfirmDialog";
import Row from "../Row";
import CreateSuiteForm from "./CreateSuiteForm";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1.5fr 1fr 1.5fr 1fr;
  column-gap: 1rem;
  padding: 1rem 1rem;
  justify-items: center;
  align-items: center;
  color: var(--text-color-black);
  background-color: var(--color-bg-white);

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border-golden);
  }
`;

export const StyledLabel = styled.div`
  font-size: var(--font-size-form);
  font-weight: 300;
  font-family: var(--font-table-header);
`;

const Img = styled.img`
  display: block;
  height: 8rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  justify-items: center;
  align-items: center;
`;

function SuiteRow({ suite }) {
  const {
    name,
    code,
    maxcapacity,
    price,
    minroomsizeft,
    maxroomsizeft,
    image,
  } = suite;

  const [showDialog, setShowDialog] = useState(false);
  const { isRemoving, removeSuite } = useRemoveSuite();

  const [showForm, setShowForm] = useState(false);

  const handleRemove = (code) => {
    removeSuite(code);
    setShowDialog(false);
  };

  return (
    <>
      <TableRow>
        <Img src={`${supabaseImageUrl}${image || "default-image.png"}`} />
        <StyledLabel>{name}</StyledLabel>
        <StyledLabel>{code}</StyledLabel>
        <StyledLabel>Up to {maxcapacity}</StyledLabel>
        <StyledLabel>{formatCurrency(price)}</StyledLabel>
        <StyledLabel>
          {minroomsizeft} - {maxroomsizeft} sq ft
        </StyledLabel>
        <div>
          <Row type="horizontal">
            <Button
              size="xs"
              onClick={() => setShowForm(!showForm)}
              disabled={isRemoving}
            >
              Edit
            </Button>
            <Button
              size="xs"
              onClick={() => setShowDialog(!showDialog)}
              disabled={isRemoving}
            >
              Remove
            </Button>
          </Row>
        </div>
        {showDialog && (
          <ConfirmDialog
            resourceName={name}
            onConfirm={() => handleRemove(code)}
            onCancel={() => setShowDialog(false)}
          />
        )}
      </TableRow>

      {showForm && (
        <CreateSuiteForm
          suiteToEdit={suite}
          onCancel={() => setShowForm(false)}
        />
      )}
    </>
  );
}
export default SuiteRow;
