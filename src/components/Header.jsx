import styled from "styled-components";
import Heading from "./Heading";

const StyledHeader = styled.header`
  background-color: var(--color-bg-black);
  color: var(--color-text-white);
  padding: 1.8rem 2rem;
  border-bottom: 1px solid var(--color-primary-normal);
`;
function Header() {
  return (
    <StyledHeader>
      <Heading as="h3">Hotel X Manager</Heading>
    </StyledHeader>
  );
}
export default Header;
