import styled from "styled-components";
import Heading from "../ui/Heading";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 2.5rem;
  width: auto;
`;

function Logo() {
  return (
    <>
      <StyledLogo>
        <Img src="/logo.png" alt="Logo" />
        <Heading as="h3">Hotel X</Heading>
      </StyledLogo>
    </>
  );
}

export default Logo;
