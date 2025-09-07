import styled from "styled-components";
import Logo from "./Logo";
import MianNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-bg);
  padding: 1.2rem 1.2rem;
  border-right: 1px solid var(--color-border-black);

  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MianNav />
    </StyledSidebar>
  );
}
export default Sidebar;
