import React from "react"
import {Link} from "gatsby"
import styled from "@emotion/styled"

import stylingGlobals from "../styles/styling-globals"

const SidebarContainer = styled.nav`
  margin: .5rem 0 0 0;

  @media (min-width: ${stylingGlobals.viewportSizes.tablet}) {
    position: fixed;
    bottom: 0;
    top: 53px;
    height: calc(100vh - 7rem);
    width: 12rem;
    background: var(--sidebar-background);
    border-right: 1px solid;
    border-color: var(--navbg-border);
    overflow-y: auto;
    
    padding-top: .5rem;
  }
  
  @media (min-width: ${stylingGlobals.viewportSizes.desktop}) {
    width: 18rem;
    margin: .5rem 0 0 0;
  }
`

const SidebarHeader = styled.div`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1rem;
  padding: .5rem 0 .5rem 1.5rem;
`

const SidebarLinkTitle = styled.span`
  align-items: center;
  display: flex;
  position: relative;
  font-size: .9rem;
  
  padding: .5rem 0 .5rem 1.5rem;
  
  :before {
    content: "";
    left: calc(0.5rem);
    height: 8px;
    position: absolute;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    width: 8px;
    border-radius: 10px;
    background-color: ${({ active }) => active ? `var(--primary)` : 'none'};
  }
  
  :hover {
    background-color: rgba(2, 136, 209, 0.2);
  }
`

const SidebarSectionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0.1rem 0;
  
  :first-of-type {
    margin-top: 0;
  }
`

const SidebarLink = styled(Link)`
  color: var(--foreground) !important;
  text-decoration: none;
`

function SidebarSectionChild({ section, location }) {
  return (
    <li>
      <SidebarLink to={section.url}>
        <SidebarLinkTitle active={location.pathname.startsWith(section.url)}>
          {section.title}
        </SidebarLinkTitle>
      </SidebarLink>
    </li>
  )
}

function SidebarTopSection({ section, location }) {
  return (
    <div>
      <SidebarHeader>{section.title}</SidebarHeader>
      <SidebarSectionList>
        {section.children.map((child, idx) => <SidebarSectionChild section={child} key={idx} location={location} />)}
      </SidebarSectionList>
    </div>
  )
}

export default function Sidebar({ sidebar, location }) {
  return (
    <SidebarContainer>
      {sidebar.map((section, idx) => <SidebarTopSection key={idx} section={section} location={location} /> )}
    </SidebarContainer>
  )
}