import React from "react"
import styled from "@emotion/styled"

import stylingGlobals from "../styles/styling-globals"

const FooterContainer = styled.footer`
  @media (min-width: ${stylingGlobals.viewportSizes.phone}) {
    position: fixed;
    bottom: 0;
    background: var(--sidebar-background);
    border-top: 1px solid;
    border-color: var(--navbg-border);
    font-size: .8rem;
    width: 100%;
  }
`

const FooterInner = styled.div`
  padding: 1rem;
`

export default function Footer() {
  return (
    <FooterContainer>
      <FooterInner>
        Copyright &copy; 2018-{new Date().getFullYear()} PaperMC and Velocity Contributors.&nbsp;
        <a href="https://opencollective.com/PaperMC">Support PaperMC on Open Collective</a>.
      </FooterInner>
    </FooterContainer>
  )
}