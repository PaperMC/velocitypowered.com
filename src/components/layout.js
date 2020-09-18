import React, {useEffect, useState} from "react"
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

function LayoutChildren({ children, ...props }) {
  return (
    <>
      <Navbar {...props} />
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
  const [themeName, setThemeName] = useState(undefined)
  useEffect(() => {
    const root = window.document.documentElement;
    const seenColorMode = root.style.getPropertyValue('--initial-color-mode');
    if (seenColorMode) {
      setThemeName(seenColorMode);
    }
  }, [])
  useEffect(() => {
    if (typeof themeName !== 'undefined') {
      setupThemeProperties(themes[themeName]);
      localStorage.setItem('__velocity_preferred_theme', themeName);
    }
  }, [themeName])

  const theme = themes[typeof themeName === 'undefined' ? 'dark' : themeName]
  const injectedProps = { themeName, setThemeName, ...props }
  return (
    <ThemeProvider theme={theme} >
      <LayoutChildren {...injectedProps} />
    </ThemeProvider>
  )
}