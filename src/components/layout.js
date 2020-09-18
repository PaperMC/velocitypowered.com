import React, { useLayoutEffect, useState } from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { ThemeProvider } from 'emotion-theming'
import Footer from "./footer"
import Navbar from "./navbar"
import themes from '../styles/theme';
import '../styles/global.css';

import stylingGlobals from "../styles/styling-globals"
import {setupThemeProperties} from "../theme-util";

const Container = styled.main`
  margin-top: 60px;
  @media (min-width: ${stylingGlobals.viewportSizes.phone}) {
    margin-bottom: 60px 0;
  }
`

function LayoutChildren({ location, jumbotron, children, themeName, setThemeName }) {
  return (
    <>
      <Global styles={css`
        body {
          background: var(--background);
          color: var(--foreground);
        }
        
        a, a:visited {
          color: var(--primary);
          text-decoration: none;
        }
        
        table {
          width: 100%;
          padding: 1rem;
          background-color: var(--table-background);
        }
        
        td {
          text-align: left;
          padding: .5rem;
        }
      `} />
      <Navbar location={location} themeName={themeName} setThemeName={setThemeName} />
      {/* page contents */}
      <Container>
        {children}
      </Container>
      {/* footer */}
      <Footer />
    </>
  )
}

export default function Layout(props) {
  const [ themeName, setThemeName ] = useState('dark')
  const theme = themes[themeName]

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    const seenColorMode = root.style.getPropertyValue('--initial-color-mode');
    if (seenColorMode) {
      setThemeName(seenColorMode);
      setupThemeProperties(themes[seenColorMode])
    }
  }, [])

  function savePreferredTheme(themeName) {
    setThemeName(themeName)
    localStorage.setItem('__velocity_preferred_theme', themeName)
    setupThemeProperties(themes[themeName])
  }

  const injectedProps = {themeName, setThemeName: savePreferredTheme, ...props}
  return (
    <ThemeProvider theme={theme}>
      <LayoutChildren {...injectedProps} />
    </ThemeProvider>
  )
}