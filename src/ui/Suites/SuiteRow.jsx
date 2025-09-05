import styled from "styled-components";
import { TextStyle500, TextStyle700 } from "../Text";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 1.5fr 1fr 1fr 1fr;
  column-gap: 1.2rem;
  justify-items: center;
  align-items: center;
  color: var(--text-color);
  background-color: var(--color-white);
  padding: 1rem 2rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-border-golden);
  }
`;

const Img = styled.img`
  display: block;
  height: 8rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  justify-items: center; /* center items horizontally in each cell */
  align-items: center; /* center items vertically in each cell */
`;

function SuiteRow({ suite }) {
  const { name, maxcapacity, price, discount, image } = suite;
  return (
    <TableRow>
      <Img src={image} />
      <TextStyle700>{name}</TextStyle700>

      <TextStyle500>{maxcapacity}</TextStyle500>

      <TextStyle500>{price}</TextStyle500>

      <TextStyle500>{discount}</TextStyle500>

      <div></div>
    </TableRow>
  );
}
export default SuiteRow;
