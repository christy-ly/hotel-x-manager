import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Main = styled.main`
  background-color: var(--color-bg-white);
  padding: 3rem 3.8rem 8.4rem;
  overflow: scroll;
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}
export default AppLayout;
