import React from "react"
import styled from "@emotion/styled"
import {Link} from "gatsby-theme-localization";

const NoUnderlinedLink = styled(Link)`
  text-decoration: none;
`

const FullWidthButtonContainer = styled.div`
  padding: .75rem;
  margin-bottom: 1rem;
  background-color: #0078a1;
  background-repeat: no-repeat;
  background-size: 0 100%;
  color: #fff;
  transition: background-color .25s 0s;
  &:hover{
    background-color: #0096c9;
  }
`

const FullWidthButtonTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
`

export default function FullWidthButton({ title, subtitle, link }) {
  return <NoUnderlinedLink to={link}>
    <FullWidthButtonContainer>
      <FullWidthButtonTitle>{title}</FullWidthButtonTitle>
      <div>{subtitle}</div>
    </FullWidthButtonContainer>
  </NoUnderlinedLink>
}