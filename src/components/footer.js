import React from "react"
import {Link} from "gatsby";
import styled from "@emotion/styled"
import theme from '../styles/theme';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  background: ${theme.colors.jumbotron};
  font-size: .8rem;
  width: 100%;
`

const FooterInner = styled.div`
  padding: 1rem;
`

export default function Footer() {
  return (
    <FooterContainer>
      <FooterInner>
        Copyright &copy; 2018-2020 Velocity Contributors.
        This wouldn't be possible without our <Link to={"/sponsors"}>generous sponsors</Link>.
      </FooterInner>
    </FooterContainer>
  )
}