import React, { useState } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import velocityWhiteCropped from "../assets/img/velocity-white-cropped.png";
import velocityBlueCropped from "../assets/img/velocity-blue-cropped.png";
import theme from '../styles/theme'
import { IconContext } from "react-icons"
import { FiMenu } from "react-icons/fi"

import stylingGlobals from "../styles/styling-globals"

const NavbarContainer = styled.nav`
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${theme.colors.navbg};
  z-index: 100;
`

const NavbarList = styled.div`
  display: flex;
`
const NavbarLogo = styled.div`
  padding: 15px;
  flex: 1;
`
const NavbarItem = styled.div`
  padding: 18px 10px;
  background: linear-gradient(to right, #0288d1, #0288d1);
  background-repeat: no-repeat;
  background-size: ${( {active} ) => active ? '100% 100%' : '0 100%'};
  transition: ${( {active} ) => active ? 'none' : 'background-size 1s 0s'};
  &:hover{
    background-size: 100% 100%;
  }
  a {
    color: ${theme.colors.foreground} !important;
  }
  
  @media (max-width: ${stylingGlobals.viewportSizes.phone}) {
    padding: 8px;
    border-bottom: 1px solid ${theme.colors.navbgBorder};
  }
`

const NavbarItems = styled.div`
  display: flex;
  
  @media (max-width: ${stylingGlobals.viewportSizes.phone}) {
    display: none;
  }
`

const MobileNavbarItems = styled.div`
  display: none;
  background-color: ${theme.colors.navbg};
  
  @media (max-width: ${stylingGlobals.viewportSizes.phone}) {
    margin-bottom: -60px;
    display: ${( { mobileShown }) => mobileShown ? 'block' : 'none'};
  }
`

const NavbarExpand = styled.div`
  padding: 18px 10px 0 10px;
  
  @media (min-width: ${stylingGlobals.viewportSizes.phone}) {
    display: none;
  }
`

function getLogoShown() {
  return theme.logoVariant === 'blue' ? velocityBlueCropped : velocityWhiteCropped
}

function NavbarItemContents({ location }) {
  return <>
    <NavbarItem active={location.pathname.startsWith("/wiki")}>
      <Link to={"/wiki"}>Documentation</Link>
    </NavbarItem>
    <NavbarItem active={location.pathname.startsWith("/downloads")}>
      <Link to={"/downloads"}>Downloads</Link>
    </NavbarItem>
    <NavbarItem>
      <Link to={"https://forums.velocitypowered.com"}>Forums</Link>
    </NavbarItem>
    <NavbarItem>
      <Link to={"https://discord.gg/8cB9Bgf"}>Discord</Link>
    </NavbarItem>
  </>
}

export default function Navbar({ location, jumbotron }) {
  const [ expanded, setExpanded ] = useState(false)

  function flipExpanded() {
    setExpanded(!expanded)
  }

  return (
    <NavbarContainer>
      <NavbarList style={{
        borderBottom: !jumbotron ? `1px solid ${theme.colors.navbgBorder}` : 'none'
      }}>
        <NavbarLogo>
          <Link
            to={"/"}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              color: theme.colors.foreground,
              fontWeight: 'bold'
            }
          }>
            <img src={getLogoShown()} alt={"Velocity"} height={"30"} style={{ paddingRight: '.3rem' }}/>
            <span>Velocity</span>
          </Link>
        </NavbarLogo>

        <NavbarExpand onClick={flipExpanded}>
          <IconContext.Provider value={{ size: "1.5rem" }}>
            <FiMenu />
          </IconContext.Provider>
        </NavbarExpand>

        <NavbarItems>
          <NavbarItemContents location={location} />
        </NavbarItems>
      </NavbarList>

      <MobileNavbarItems mobileShown={expanded}>
        <NavbarItemContents location={location} />
      </MobileNavbarItems>
    </NavbarContainer>
  )
}