import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useEffect } from "react";
import { getSuites } from "../services/apiSuites";

function Suites() {
  useEffect(function () {
    getSuites().then((data) => {
      console.log("Data");
      console.log(data);
    });
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">Suites page</Heading>
    </Row>
  );
}

export default Suites;
