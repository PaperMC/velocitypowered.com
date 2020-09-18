const themes = {
  dark: {
    logoVariant: 'white',
    tableBackground: '#323232',
    titleButton: 'white',
    skipMobileNavbarBorders: false,
    colors: {
      background: '#111',
      foreground: '#eee',

      jumbotron: '#222',

      navbgBorder: '#212426',
      sidebarBackground: '#111',

      navbarBg: '#111',
      navbarText: '#eee',

      primary: '#29b6f6',
      gray: '#e1e1e1',
    }
  },
  light: {
    logoVariant: 'blue',
    tableBackground: '#e1e1e1',
    titleButton: 'black',
    skipMobileNavbarBorders: true,
    colors: {
      background: '#fff',
      foreground: '#222',

      jumbotron: '#ebebeb',

      navbgBorder: '#d9dcde',
      sidebarBackground: '#fff',

      navbarBg: '#212426',
      navbarText: '#eee',

      primary: '#0288d1',
      gray: '#e1e1e1',
    }
  },
}

export default themes.dark