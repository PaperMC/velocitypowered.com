import React from 'react'
import themes from './src/styles/theme'
import {setupThemeProperties} from './src/theme-util'
import Layout from "./src/components/layout";

const darkNavbarImg = require('./src/assets/img/velocity-white-cropped.png');
const darkJumbotronImg = require('./src/assets/img/velocity-white.png');
const lightNavbarImg = require('./src/assets/img/velocity-blue-cropped.png');
const lightJumbotronImg = require('./src/assets/img/velocity-blue.png');

const FallbackColors = () => {
  const defaultStyles = `
    html {
       --dark-jumbotron-logo-url: url(${darkJumbotronImg});
       --dark-navbar-logo-url: url(${darkNavbarImg});
       --light-jumbotron-logo-url: url(${lightJumbotronImg});
       --light-navbar-logo-url: url(${lightNavbarImg});
    
       --background: ${themes.dark.colors.background};
       --foreground: ${themes.dark.colors.foreground};
       --jumbotron: ${themes.dark.colors.jumbotron};
       --navbg-border: ${themes.dark.colors.navbgBorder};
       --sidebar-background: ${themes.dark.colors.sidebarBackground};
       --navbar-background: ${themes.dark.colors.navbarBg};
       --navbar-text: ${themes.dark.colors.navbarText};
       --primary: ${themes.dark.colors.primary};
       --gray: ${themes.dark.colors.gray};
       --table-background: ${themes.dark.tableBackground};
       
       --jumbotron-logo-url: var(--dark-jumbotron-logo-url);
       --navbar-logo-url: var(--dark-navbar-logo-url);
    }
  `;
  return <style dangerouslySetInnerHTML={{ __html: defaultStyles}} />
}

const MagicScriptTag = () => {
  let codeToRunOnClient = `
(function() {
  const themes = JSON.parse('${JSON.stringify(themes) /* Wonder about the security? Well, you already lost the game if the site is compromised. */}');

  ${String(setupThemeProperties)}

  function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem('__velocity_preferred_theme');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
    return 'dark';
  }
  const colorMode = getInitialColorMode();
  const preferredTheme = themes[colorMode];
  
  setupThemeProperties(preferredTheme);
  document.documentElement.style.setProperty('--initial-color-mode', colorMode);
})()`;
  // eslint-disable-next-line react/no-danger
  return (
    <script
      dangerouslySetInnerHTML={{ __html: codeToRunOnClient }}
    />
  );
};

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents(<FallbackColors key={"fallback-colors"} />)
  setPreBodyComponents(<MagicScriptTag key="dark-theme-hax" />);
};

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}