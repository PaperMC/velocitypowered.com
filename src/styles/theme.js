export default {
  dark: {
    logos: {
      navbar: require('../assets/img/velocity-white-cropped.png'),
      jumbotron: require('../assets/img/velocity-white.png'),
    },
    logoVariant: 'white',
    tableBackground: '#323232',
    titleButton: 'white',
    skipMobileNavbarBorders: false,
    colors: {
      background: '#121212',
      foreground: '#eee',

      jumbotron: '#222',

      navbgBorder: '#212426',
      sidebarBackground: '#121212',

      navbarBg: '#121212',
      navbarText: '#eee',

      primary: '#29b6f6',
      gray: '#e1e1e1',
    }
  },
  light: {
    logos: {
      navbar: require('../assets/img/velocity-blue-cropped.png'),
      jumbotron: require('../assets/img/velocity-blue.png'),
    },
    logoVariant: 'blue',
    tableBackground: '#e1e1e1',
    titleButton: 'black',
    skipMobileNavbarBorders: true,
    colors: {
      background: '#fff',
      foreground: '#121212',

      jumbotron: '#ebebeb',

      navbgBorder: '#d9dcde',
      sidebarBackground: '#fff',

      navbarBg: '#121212',
      navbarText: '#eee',

      primary: '#0288d1',
      gray: '#e1e1e1',
    }
  }
}