import SuiteTable from "../ui/Suites/SuiteTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Suites() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Suites</Heading>
        <p>filter</p>
      </Row>
      <Row>
        <SuiteTable />
      </Row>
    </>
  );
}

export default Suites;
