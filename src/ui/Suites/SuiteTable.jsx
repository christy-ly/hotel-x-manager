import { useQuery } from "@tanstack/react-query";
import { getSuites } from "../../services/apiSuites";
import styled from "styled-components";

import SuiteRow from "./SuiteRow";

const Table = styled.div`
  font-size: 1.2rem;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 3fr 3fr 1.5fr 1fr 1fr 1fr;
  column-gap: 1.2rem;
  justify-items: center;
  background-color: var(--color-white);
  border-bottom: 2px solid var(--color-primary-001);
  letter-spacing: 0.8px;
  font-weight: 400;
  color: var(--color-grey-600);
  padding: 1rem 1rem;
`;

export default function SuiteTable() {
  const {
    isLoading,
    data: suites,
    error,
  } = useQuery({
    queryKey: ["suite"],
    queryFn: getSuites,
  });

  console.log("SuiteTable");
  console.log(suites);

  if (isLoading) return <>Loading....</>;
  if (error) return <>error</>;

  return (
    <Table>
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {suites.map((suite) => (
        <SuiteRow suite={suite} key={suite.code}></SuiteRow>
      ))}
    </Table>
  );
}
