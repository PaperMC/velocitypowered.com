import React, { useState } from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { IconContext } from "react-icons"
import { FiMenu } from "react-icons/fi"

import ThemeSwitcher from './theme-switcher'
import stylingGlobals from "../styles/styling-globals"

const NavbarContainer = styled.nav`
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--navbar-background);
  color: var(--navbar-text);
  border-bottom: 1px solid;
  border-color: var(--navbg-border);
  z-index: 100;
  
  a {
    text-decoration: none;
  }
`

const NavbarList = styled.div`
  display: flex;
`
const NavbarLogo = styled.div`
  padding: 15px;
  flex: 1;
`

const VelocityNavbarLogo = styled.div`
  width: 68.5px;
  height: 30px;
  background-image: var(--navbar-logo-url);
  background-size: cover;
  margin-right: .3rem;
`

const NavbarItem = styled.a`
  padding: 18px 10px;
  background-color: rgba(14, 111, 212, ${( {active} ) => active ? '1' : '0'});
  background-repeat: no-repeat;
  transition: background-color .25s 0s;
  color: var(--navbar-text) !important;
  display: block;
  
  &:hover{
    background-color: rgba(14, 111, 212, 1);
  }
  
  @media (max-width: ${stylingGlobals.viewportSizes.phone}) {
    padding: 8px;
    border-bottom: ${({ theme }) => theme.skipMobileNavbarBorders ? 'none' : `1px solid var(--navbg-border)`};
  }
`
const NavbarLink = NavbarItem.withComponent(Link)

const NavbarItems = styled.div`
  display: flex;
  
  @media (max-width: ${stylingGlobals.viewportSizes.phone}) {
    display: none;
  }
`

const MobileNavbarItems = styled.div`
  display: none;
  background-color: var(--navbar-background);
  
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

function NavbarItemContents({ location, onMobileClick }) {
  return <>
    <NavbarLink href={"https://docs.papermc.io/velocity"} onClick={onMobileClick}>Documentation</NavbarLink>
    <NavbarLink to={"/downloads"} active={location.pathname.startsWith("/downloads")} onClick={onMobileClick}>Downloads</NavbarLink>
    <NavbarItem href={"https://forums.papermc.io/"} onClick={onMobileClick}>Forums</NavbarItem>
    <NavbarItem href={"https://discord.gg/papermc"} onClick={onMobileClick}>Discord</NavbarItem>
    <NavbarItem href={"https://github.com/PaperMC/Velocity"} onClick={onMobileClick}>GitHub</NavbarItem>
  </>
}

export default function Navbar({ location, themeName, setThemeName }) {
  const [ mobileMenuExpanded, setMobileMenuExpanded ] = useState(false)

  function flipExpanded() {
    setMobileMenuExpanded(!mobileMenuExpanded)
  }

  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarLogo>
          <Link
            to={"/"}
            css={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              color: `var(--navbar-text) !important`,
              fontWeight: 'bold'
            }
          }>
            <VelocityNavbarLogo />
            <span>Velocity</span>
          </Link>
        </NavbarLogo>

        <NavbarExpand onClick={flipExpanded}>
          <IconContext.Provider value={{ size: "16px" }}>
            <FiMenu />
          </IconContext.Provider>
        </NavbarExpand>

        <NavbarItems>
          <NavbarItemContents location={location} />
          <div css={{ padding: '15px 10px' }}>
            <ThemeSwitcher themeName={themeName} setThemeName={setThemeName} />
          </div>
        </NavbarItems>
      </NavbarList>

      <MobileNavbarItems mobileShown={mobileMenuExpanded}>
        <NavbarItemContents location={location} onMobileClick={flipExpanded} />
      </MobileNavbarItems>
    </NavbarContainer>
  )
}
