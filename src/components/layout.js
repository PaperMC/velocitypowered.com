import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import Footer from "./footer"
import Navbar from "./navbar"
import theme from '../styles/theme';
import '../styles/global.css';

const Container = styled.main`
  margin: 60px 0;
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
          width: 150%;
          padding: 2rem;
          background-color: ${theme.tableBackground};
        }
        
        td {
          text-align: left;
          padding: .5rem;
        }
        
        .caution-header {
          font-weight: bold;
          background: rgb(184, 134, 11);
          color: black;
          padding: .5rem;
          border: rgb(184, 134, 11);
        }
        
        .caution {
          display: inline-block;
          background: rgb(222, 184, 135);
          color: black;
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