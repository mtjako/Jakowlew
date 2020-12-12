import { useState } from "react";
import styled from "styled-components";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Background = styled.nav`
  width: 100%;
  height: 75px;
  background-color: #111;
  margin-top: -75px;
  position: sticky;
  z-index: 3;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 32px;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 75px;
  width: 75px;
  height: 75px;
  color: #eee;
  @media (max-width: 750px) {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
  }
  span {
    color: #999;
  }
`;

const Menu = styled.ul`
  width: calc(100% - 75px);
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 750px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  display: block;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 75px;
  padding-left: 32px;
  &:hover {
    color: #999;
  }
`;

const MenuBtn = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  cursor: pointer;
  background-image: url("/bx-menu.svg");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  width: 75px;
  height: 75px;
  @media (min-width: 751px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  @media (min-width: 751px) {
    display: none;
  }
  width: 100%;
  position: fixed;
  top: 75px;
  z-index: 3;
  height: calc(100% - 75px);
  background-color: #191919;
`;

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Background>
        <Wrapper>
          <Logo>
            <span>{"<"}</span>MJ<span>{"/>"}</span>
          </Logo>
          <Menu>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              <MenuItem>O mnie</MenuItem>
            </Link>
            <Link
              activeClass="active"
              to="technologies"
              spy={true}
              smooth={true}
              duration={500}
            >
              <MenuItem>Technologie</MenuItem>
            </Link>
            <Link
              activeClass="active"
              to="software"
              spy={true}
              smooth={true}
              duration={500}
            >
              <MenuItem>Software</MenuItem>
            </Link>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
            >
              <MenuItem>Portfolio</MenuItem>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <MenuItem>Kontakt</MenuItem>
            </Link>
          </Menu>
          <MenuBtn onClick={() => setOpen(!open)} />
        </Wrapper>
      </Background>
      <HamburgerMenu open={open}>
        <Link
          onClick={() => setOpen(!open)}
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          <MenuItem>O mnie</MenuItem>
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          activeClass="active"
          to="technologies"
          spy={true}
          smooth={true}
          duration={500}
        >
          <MenuItem>Technologie</MenuItem>
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          activeClass="active"
          to="software"
          spy={true}
          smooth={true}
          duration={500}
        >
          <MenuItem>Software</MenuItem>
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          duration={500}
        >
          <MenuItem>Portfolio</MenuItem>
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          <MenuItem>Kontakt</MenuItem>
        </Link>
      </HamburgerMenu>
    </>
  );
};
