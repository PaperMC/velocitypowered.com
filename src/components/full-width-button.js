import React from "react"
import styled from "@emotion/styled"
import {Link} from "gatsby";
import theme from '../styles/theme'

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

export default function FullWidthButton({ title, subtitle, link }) {
  return <FullWidthButtonContainer>
    <FullWidthButtonTitle>{<Link to={link} style={{color: theme.titleButton}}>{title}</Link>}</FullWidthButtonTitle>
    <div>{subtitle}</div>
  </FullWidthButtonContainer>
}