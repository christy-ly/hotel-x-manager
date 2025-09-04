import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Main = styled.main`
  background-color: var(--color-bg);
  padding: 3rem 3.8rem 8.4rem;
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 12rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}
export default AppLayout;
