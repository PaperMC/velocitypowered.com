import React from "react"
import { IconContext } from "react-icons/lib"
import styled from "@emotion/styled"
import {Link} from "gatsby";
import stylingGlobals from "../styles/styling-globals";

const NoUnderlinedLink = styled(Link)`
  display: block;
  text-decoration: none;
  margin-right: 0.5rem;
  
  @media (max-width: ${stylingGlobals.viewportSizes.phone}) {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
`

const FullWidthButtonContainer = styled.div(props => `
  padding: ${props.demoted ? ".375rem .5rem" : ".75rem 1rem"};
  background-color: ${props.demoted ? "var(--gray)" : "rgb(14, 111, 212)"};
  background-repeat: no-repeat;
  background-size: 0 100%;
  color: ${props.demoted ? "#000" : "#fff"};
  transition: background-color .25s 0s;
  display: flex;
  
  &:hover{
    background-color: ${props.demoted ? "var(--gray)" : "rgba(14, 111, 212, 0.8);"};
  }
`)

const FullWidthButtonTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`

const TextContainer = styled.div`
  margin: auto 0 auto .5rem;
  text-align: left;
`

export default function MainPageButton({ title, icon, subtitle, link, demoted }) {
  return <NoUnderlinedLink to={link}>
    <FullWidthButtonContainer demoted={demoted}>
      <IconContext.Provider value={{ style: { margin: 'auto 0'} }}>
        {icon}
      </IconContext.Provider>
      <TextContainer>
        {!demoted ? <FullWidthButtonTitle>{title}</FullWidthButtonTitle> : <div>{title}</div>}
        <div>{subtitle}</div>
      </TextContainer>
    </FullWidthButtonContainer>
  </NoUnderlinedLink>
}