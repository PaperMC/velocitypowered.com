import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import velocityWhiteCropped from "../assets/img/velocity-white-cropped.png";
import velocityBlueCropped from "../assets/img/velocity-blue-cropped.png";
import theme from '../styles/theme'

const NavbarList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${theme.colors.navbg};
  border-bottom: 1px solid ${theme.colors.navbg};
  z-index: 100;
`
const NavbarLogo = styled.li`
  display: inline;
  float: left;
  padding: 15px;
`
const NavbarItem = styled.li`
  display: inline;
  float: right;
  padding: 18px 10px;
  
  &:hover{
      background-color: #0288d1
    }
  a {
    color: ${theme.colors.foreground} !important;
  }
`

function getLogoShown() {
  return theme.logoVariant === 'blue' ? velocityBlueCropped : velocityWhiteCropped
}

export default function Navbar() {
  return (
    <nav>
      <NavbarList>
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
        {/* WTF?!? These show in reverse order... */}
        <NavbarItem>
          <Link to={"https://discord.gg/8cB9Bgf"}>Discord</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={"https://forums.velocitypowered.com"}>Forums</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={"/downloads"}>Downloads</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={"/wiki"}>Documentation</Link>
        </NavbarItem>
      </NavbarList>
    </nav>
  )
}