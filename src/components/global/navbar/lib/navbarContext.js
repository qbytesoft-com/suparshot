import React from 'react';
let NavbarToggleContext = React.createContext();
NavbarToggleContext.displayName = 'NavbarContext';

function NavbarWrapper({ children }) {
  let [navbarOpen, setNavbarOpen] = React.useState(false);
  let toggleNavbar = () => setNavbarOpen(!navbarOpen);
  return <NavbarToggleContext.Provider value={{ navbarOpen, toggleNavbar }}>{children}</NavbarToggleContext.Provider>;
}
function useNavbarToggle() {
  return React.useContext(NavbarToggleContext);
}
export { NavbarWrapper, useNavbarToggle };
