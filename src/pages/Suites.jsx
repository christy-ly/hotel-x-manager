import SuiteTable from "../ui/Suites/SuiteTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Suites() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h2">Rooms & Suites</Heading>
        <p>filter</p>
      </Row>
      <Row>
        <p>
          Our 202 spacious rooms and suites blend modern luxury with traditional
          Asian décor. Floor-to-ceiling windows unlock downtown city views and
          the marble-clad bathrooms feature heated floors.
        </p>
      </Row>
      <Row>
        <SuiteTable />
      </Row>
    </>
  );
}

export default Suites;
