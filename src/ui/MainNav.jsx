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
  font-family: Helvetica;
  text-transform: uppercase;
  font-weight: 200;

  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--text-color);
    font-size: 1rem;
    padding: 0.6rem;
    transition: all 0.3s;
    width: 100%;
  }

  &:hover {
    color: var(--color-primary-hover);
    border-bottom: 2px solid var(--color-primary-hover);
  }

  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-primary-active);
    border-bottom: 2px solid var(--color-primary-active);
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
          <StyledNavLink to="/suites">
            <HiOutlineStar />
            Rooms & Suites
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/reservations">
            <HiCalendar />
            Reservations
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
