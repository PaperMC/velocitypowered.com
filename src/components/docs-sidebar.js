import React from "react"
import {Link} from "gatsby"
import styled from "@emotion/styled"
import theme from '../styles/theme'

import stylingGlobals from "../styles/styling-globals"

const SidebarContainer = styled.section`
  @media (min-width: ${stylingGlobals.viewportSizes.desktop}) {
    position: fixed;
    bottom: 0;
    top: 60px;
    height: calc(100vh - 9rem);
    width: 20rem;
    background: ${theme.colors.navbg};
    border-right: 1px solid ${theme.colors.navbgBorder};
    padding: 1rem;
  }
`

const SidebarHeader = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.85rem;
  margin-bottom: 1rem;
`

function SidebarSectionChild({ section }) {
  return (
    <li><Link to={section.url}>{section.title}</Link></li>
  )
}

function SidebarTopSection({ section }) {
  return (
    <div>
      <SidebarHeader>{section.title}</SidebarHeader>
      <ul>
        {section.children.map((child, idx) => <SidebarSectionChild section={child} key={idx} />)}
      </ul>
    </div>
  )
}

export default function Sidebar({ sidebar }) {
  return (
    <SidebarContainer>
      {sidebar.map((section, idx) => <SidebarTopSection key={idx} section={section} /> )}
    </SidebarContainer>
  )
}