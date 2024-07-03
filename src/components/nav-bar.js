// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #262626;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 7rem; /* Adjust padding as needed */
    z-index: 12;
    position: relative;
    border-bottom: none; /* Remove any bottom border */
`;

export const NavLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 6rem; /* Adjust padding as needed */
    height: 100%;
    cursor: pointer;
    &.active {
        font-weight: bold;
    }
`;

export const Name = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem; /* Adjust padding as needed */
    height: 100%;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.5em;
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -1rem; /* Adjust margin as needed */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const DividerContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const Divider = styled.div`
    width: 90%;
    height: 1px;
    background-color: #404040;
`;