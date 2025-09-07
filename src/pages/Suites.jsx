import { useState } from "react";
import SuiteTable from "../components/Suites/SuiteTable";
import Heading from "../components/Heading";
import Row from "../components/Row";
import Button from "../components/Button";
import CreateSuiteForm from "../components/Suites/CreateSuiteForm";

function Suites() {
  const [showForm, setShowForm] = useState(false);
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

        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Close Form" : "Create a Suite"}
        </Button>
        {showForm && <CreateSuiteForm onCancel={() => setShowForm(false)} />}
      </Row>
    </>
  );
}

export default Suites;
