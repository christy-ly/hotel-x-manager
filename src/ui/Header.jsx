import styled from "styled-components";
import Heading from "../ui/Heading";

const StyledHeader = styled.header`
  background-color: var(--color-secondary-002);
  padding: 1.8rem 2rem;
  border-bottom: 1px solid var();
`;
function Header() {
  return (
    <StyledHeader>
      <Heading as="h2">Hotel X</Heading>
    </StyledHeader>
  );
}
export default Header;
