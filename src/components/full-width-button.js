import React from "react"
import styled from "@emotion/styled"
import {Link} from "gatsby";
import theme from '../styles/theme'
import {css} from "@emotion/core";

const FullWidthButtonContainer = styled.div`
  padding: .75em;
  background: linear-gradient(to right, #0288d1, #0288d1);
  background-repeat: no-repeat;
  background-size: 0 100%;
  transition: background-size 1s 0s;
  &:hover{
    background-size: 100% 100%;
  }
`

const FullWidthButtonTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`

const linkStyle = css`
  color: ${theme.colors.foreground} !important;
`

export default function FullWidthButton({ title, subtitle, link }) {
  return <Link to={link} css={linkStyle}>
    <FullWidthButtonContainer>
      <FullWidthButtonTitle>{title}</FullWidthButtonTitle>
      <div>{subtitle}</div>
    </FullWidthButtonContainer>
  </Link>
}