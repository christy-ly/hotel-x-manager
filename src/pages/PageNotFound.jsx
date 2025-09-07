import styled from "styled-components";

import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../components/Heading";
import Button from "../components/Button";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">Oops!</Heading>
        <Heading as="h2">We couldn’t find the page you’re looking for</Heading>
        <Button onClick={moveBack} size="medium">
          Previous Page
        </Button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
