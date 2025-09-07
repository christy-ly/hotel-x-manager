import { useQuery } from "@tanstack/react-query";
import { getSuites } from "../../api/apiSuites";
import { useSuite } from "./hooks/useSuite";
import styled from "styled-components";
import SuiteRow from "./SuiteRow";

const Table = styled.div`
  font-size: 1.2rem;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1.5fr 1fr 1.5fr 1fr;
  column-gap: 1rem;
  padding: 1rem 1rem;
  justify-items: center;
  align-items: center;
  font-weight: 400;
  background-color: var(--color-white);
  color: var(--text-color-black);
  border-bottom: 3px solid var(--color-border-golden);
`;

export default function SuiteTable() {
  const { isLoading, suites, error } = useSuite();

  if (isLoading) return <>Loading....</>;
  if (error) return <>error</>;

  return (
    <Table>
      <TableHeader role="row">
        <div></div>
        <div>Suite</div>
        <div>Code</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Size</div>
        <div></div>
      </TableHeader>
      {suites.map((suite) => (
        <SuiteRow suite={suite} key={suite.code}></SuiteRow>
      ))}
    </Table>
  );
}
