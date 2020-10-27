import React from "react"
import styled from "@emotion/styled"
import {Link} from "gatsby";

const NoUnderlinedLink = styled(Link)`
  display: block;
  text-decoration: none;
  margin-right: 0.5rem;
`

const FullWidthButtonContainer = styled.div`
  padding: .75rem 1rem;
  text-align: center;
  background-color: rgb(14, 111, 212);
  background-repeat: no-repeat;
  background-size: 0 100%;
  color: #fff;
  transition: background-color .25s 0s;
  display: flex;
  
  &:hover{
    background-color: rgba(14, 111, 212, 0.8);
  }
`

const FullWidthButtonTitle = styled.div`
  font-size: 1.3rem;
`

const IconContainer = styled.div`
  margin: auto 0;
`

const TextContainer = styled.div`
  margin: auto .5rem;
`

export default function MainPageButton({ title, icon, link }) {
  return <NoUnderlinedLink to={link}>
    <FullWidthButtonContainer>
      {icon ? <IconContainer>{icon}</IconContainer> : null}
      <TextContainer>
        <FullWidthButtonTitle>{title}</FullWidthButtonTitle>
      </TextContainer>
    </FullWidthButtonContainer>
  </NoUnderlinedLink>
}