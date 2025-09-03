import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiCalendar,
  HiOutlineUsers,
  HiOutlineSquaresPlus,
  HiOutlineStar,
  HiOutlineIdentification,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 0.2rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.6rem;
    transition: all 0.3s;
    width: 100%;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-secondary-001);
    background-color: var(--color-primary-001);
    border-radius: var(--border-radius-sm);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/reservations">
            {" "}
            <HiCalendar />
            Reservations
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/suites">
            <HiOutlineStar />
            Suites
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/guests">
            <HiOutlineIdentification />
            Guests
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <HiOutlineUsers />
            Users
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineSquaresPlus />
            Settings
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
