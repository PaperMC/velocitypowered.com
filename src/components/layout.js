import React from "react"
import styled from "@emotion/styled"
import { ThemeProvider } from 'emotion-theming'
import Footer from "./footer"
import Navbar from "./navbar"
import themes from '../styles/theme';
import '../styles/global.css';

import stylingGlobals from "../styles/styling-globals"
import ThemeNameProvider, {ThemeNameConsumer} from "../contexts/theme-name";

const Container = styled.main`
  margin-top: 60px;
  @media (min-width: ${stylingGlobals.viewportSizes.phone}) {
    margin-bottom: 60px 0;
  }
`

function LayoutChildren({ location, children }) {
  return (
    <>
      <Navbar location={location} />
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
  return (
    <ThemeNameProvider>
      <ThemeNameConsumer>
        {({ themeName }) => {
          const theme = themes[themeName]
          return <ThemeProvider theme={theme}>
            <LayoutChildren {...props} />
          </ThemeProvider>
        }}
      </ThemeNameConsumer>
    </ThemeNameProvider>
  )
}