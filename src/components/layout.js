import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import Footer from "./footer"
import Navbar from "./navbar"
import theme from '../styles/theme';
import '../styles/global.css';

import stylingGlobals from "../styles/styling-globals"

const Container = styled.main`
  margin-top: 60px;
  @media (min-width: ${stylingGlobals.viewportSizes.phone}) {
    margin-bottom: 60px 0;
  }
`

export default function Layout({ location, jumbotron, children }) {
  return (
    <>
      <Global styles={css`
        body {
          background: ${theme.colors.background};
          color: ${theme.colors.foreground};
        }
        
        a, a:visited {
          color: ${theme.colors.primary};
          text-decoration: none;
        }
        
        table {
          width: 100%;
          padding: 2rem;
          background-color: ${theme.tableBackground};
        }
        
        td {
          text-align: left;
          padding: .5rem;
        }
      `} />
      <Navbar jumbotron={jumbotron} location={location} />
      {/* page contents */}
      <Container>
        {children}
      </Container>
      {/* footer */}
      <Footer jumbotron={jumbotron} />
    </>
  )
}