import React, { useState } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import velocityWhiteCropped from "../assets/img/velocity-white-cropped.png";
import velocityBlueCropped from "../assets/img/velocity-blue-cropped.png";
import theme from '../styles/theme'

import stylingGlobals from "../styles/styling-globals"

const NavbarList = styled.div`
  display: flex;
  
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${theme.colors.navbg};
  z-index: 100;
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
`

const NavbarItems = styled.div`
  display: flex;
  
  @media (max-width: ${stylingGlobals.viewportSizes.phone}) {
    display: none;
  }
`

const NavbarExpand = styled.div`
  
`

function getLogoShown() {
  return theme.logoVariant === 'blue' ? velocityBlueCropped : velocityWhiteCropped
}

export default function Navbar({ location, jumbotron }) {
  const [ expanded, setExpanded ] = useState(null)

  function flipExpanded() {
    setExpanded(!expanded)
  }

  return (
    <nav>
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

        <NavbarExpand onClick={flipExpanded} />
        <NavbarItems>
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
        </NavbarItems>
      </NavbarList>
    </nav>
  )
}