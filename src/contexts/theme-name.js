import React from "react";
import {setupThemeProperties} from "../theme-util";
import themes from "../styles/theme";

const ThemeNameContext = React.createContext()

export default class ThemeNameProvider extends React.Component {
  state = { themeName: 'dark' }

  componentDidMount() {
    const root = window.document.documentElement;
    const seenColorMode = root.style.getPropertyValue('--initial-color-mode');
    if (seenColorMode) {
      this.setThemeName(seenColorMode);
      setupThemeProperties(themes[seenColorMode]);
    }
  }

  setThemeName = (themeName) => {
    this.setState({ themeName })
    if (typeof document !== 'undefined') {
      setupThemeProperties(themes[themeName])
    }
  }

  componentDidUpdate() {
    localStorage.setItem('__velocity_preferred_theme', this.state.themeName)
  }

  render() {
    const providedState = { themeName: this.state.themeName, setThemeName: this.setThemeName }
    return <ThemeNameContext.Provider value={providedState}>
        {this.props.children}
    </ThemeNameContext.Provider>
  }
}

export const ThemeNameConsumer = ThemeNameContext.Consumer

export function useThemeName() {
  const context = React.useContext(ThemeNameContext)
  if (context === undefined) {
    throw new Error('useThemeName must be used within a ThemeNameProvider')
  }
  return context
}