import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const StyledApp = styled.div`
  background-color: var(--color-bg-ivory);
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">Hotel X</Heading>

          <div>
            <Heading as="h2">Check In & Out</Heading>
            <Button variations="primary" size="medium">
              Check in{" "}
            </Button>

            <Button variations="secondary" size="medium">
              Check out{" "}
            </Button>
          </div>
        </Row>
        <Row type="vertical">
          <Heading as="h3">Form</Heading>
          <form>
            <Input placeholder="Number of Guest" />
            <Input placeholder="Number of Day" />
          </form>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
