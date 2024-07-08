import React from "react";
import {
    Nav,
    NavLink,
    // Bars,
    NavMenu,
    Name,
    Divider,
    DividerContainer
    // NavBtn,
    // NavBtnLink,
} from "./nav-bar";

const Navbar = () => {
    return (
        <div style={{
                background: "#262626"
            }}>
            <Nav>
                {/* <Bars /> */}
                <Name to="/">Daniel Tran</Name>
                <div style={{flex:1}}></div>
                <NavMenu>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/resume" activeStyle>
                        Resume
                    </NavLink>
                    {/* <NavLink to="/about" activeStyle>
                        About
                    </NavLink> */}
                </NavMenu>
            </Nav>
            <DividerContainer>
                <Divider />
            </DividerContainer>
        </div>
    );
};

export default Navbar;