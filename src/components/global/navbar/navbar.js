import React from 'react';
import MobileNavMenu from './lib/mobileMenu';
import Brand from './lib/brand';
import SearchBar from './lib/searchbar';
import MenuItem from './lib/menuItems';
import { NavbarWrapper } from './lib/navbarContext';

function Navbar() {
  return (
    <NavbarWrapper>
      <div className="navbar-main fixed z-10">
        <Brand />

        <SearchBar />

        <MenuItem />
      </div>
      <MobileNavMenu />
    </NavbarWrapper>
  );
}

export default Navbar;
