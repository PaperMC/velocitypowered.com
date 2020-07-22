import React from "react"
import styled from "@emotion/styled"
import theme from "../styles/theme"
import {Link} from "gatsby";

const FullWidthButtonContainer = styled.div`
  background-color: ${theme.colors.jumbotron};
  padding: 1rem;
  width: 100%;
  margin-bottom: 2rem;
`

const FullWidthButtonTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`

export default function FullWidthButton({ title, subtitle, link }) {
  return <FullWidthButtonContainer>
    <FullWidthButtonTitle>{<Link to={link}>{title}</Link>}</FullWidthButtonTitle>
    <div>{subtitle}</div>
  </FullWidthButtonContainer>
}