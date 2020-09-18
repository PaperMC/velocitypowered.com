export function setupThemeProperties(theme) {
  const root = document.documentElement;
  root.style.setProperty('--background', theme.colors.background);
  root.style.setProperty('--foreground', theme.colors.foreground);
  root.style.setProperty('--jumbotron', theme.colors.jumbotron);
  root.style.setProperty('--navbg-border', theme.colors.navbgBorder);
  root.style.setProperty('--sidebar-background', theme.colors.sidebarBackground);
  root.style.setProperty('--navbar-background', theme.colors.navbarBg);
  root.style.setProperty('--navbar-text', theme.colors.navbarText);
  root.style.setProperty('--primary', theme.colors.primary);
  root.style.setProperty('--gray', theme.colors.gray);
  root.style.setProperty('--table-background', theme.tableBackground);
}