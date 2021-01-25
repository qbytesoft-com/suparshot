import React from 'react';
import MobileNavMenu from './navbar/mobileMenu';
import Brand from './navbar/brand';
import SearchBar from './navbar/searchbar';
import MenuItem from './navbar/menuItems';
import { NavbarWrapper } from './navbar/navbarContext';

function Navbar({ className = '' }) {
  let style = `navbar-main fixed z-50 ${className}`;
  return (
    <NavbarWrapper>
      <div className={style}>
        <Brand />

        <SearchBar />

        <MenuItem />
      </div>
      <MobileNavMenu />
    </NavbarWrapper>
  );
}

export default Navbar;
