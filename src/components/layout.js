import React, {useEffect, useState} from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { ThemeProvider, useTheme } from 'emotion-theming'
import Footer from "./footer"
import Navbar from "./navbar"
import themes from '../styles/theme';
import '../styles/global.css';

import stylingGlobals from "../styles/styling-globals"

const Container = styled.main`
  margin-top: 60px;
  @media (min-width: ${stylingGlobals.viewportSizes.phone}) {
    margin-bottom: 60px 0;
  }
`

function LayoutChildren({ location, jumbotron, children, themeName, setThemeName }) {
  const theme = useTheme();
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
          padding: 1rem;
          background-color: ${theme.tableBackground};
        }
        
        td {
          text-align: left;
          padding: .5rem;
        }
      `} />
      <Navbar jumbotron={jumbotron} location={location} themeName={themeName} setThemeName={setThemeName} />
      {/* page contents */}
      <Container>
        {children}
      </Container>
      {/* footer */}
      <Footer jumbotron={jumbotron} />
    </>
  )
}

export default function Layout(props) {
  const [ themeName, setThemeName ] = useState('dark')

  // Check for localStorage. If we don't have localStorage, we're probably not even in a browser.
  useEffect(() => {
    let storedTheme = 'dark'
    if (typeof localStorage !== 'undefined') {
      storedTheme = localStorage.getItem('__velocity_preferred_theme')
      if (storedTheme == null || !themes.hasOwnProperty(storedTheme)) {
        if (typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
          // User prefers to be blinded by a light theme. We only aim to please!
          storedTheme = 'light'
        } else {
          storedTheme = 'dark'
        }
      }
    }

    if (storedTheme !== themeName) {
      setThemeName(storedTheme)
    }
  }, [])
  const theme = themes[themeName]

  function savePreferredTheme(themeName) {
    setThemeName(themeName)
    localStorage.setItem('__velocity_preferred_theme', themeName)
  }

  const injectedProps = {themeName, setThemeName: savePreferredTheme, ...props}
  return (
    <ThemeProvider theme={theme}>
      <LayoutChildren {...injectedProps} />
    </ThemeProvider>
  )
}