import React from 'react';
import { Button } from 'components/lib';
import { Dropdown, DropdownMenuButton, DropDownMenuList, DropDownMenuListItem } from 'components/lib/dropdown';
import { HiOutlineDotsHorizontal, HiMenu } from 'react-icons/hi';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavbarToggle } from './navbarContext';
import LoginMenu from './menuitems/LoginMenu';
import LogoutMenu from './menuitems/LogoutMenu';
import SocialMenu from './menuitems/SocialMenu';

function ProfileDropDownButton() {
  return (
    <div className="flex items-center text-white">
      <img
        src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
        alt="profile"
        className="w-5 h-5 rounded-full mr-2 border-2 border-white"
      />
      <FaChevronDown size="0.8rem" />
    </div>
  );
}

function MenuItem() {
  let { toggleNavbar } = useNavbarToggle();
  let [user, setUser] = React.useState(true);
  return (
    <ul className="navbar-main p-0 m-0 list-none flex ml-auto text-white w-auto">
      <li className="hidden lg:block">
        <Link to="/explore" className="mr-8">
          Explore
        </Link>
      </li>
      <li className="hidden lg:block">
        <Link to="/explore" className="mr-8">
          License
        </Link>
      </li>
      <li className="hidden lg:block">
        <Link to="/join" className="mr-8">
          Upload
        </Link>
      </li>
      <li className="hidden md:block">
        <Dropdown>
          <DropdownMenuButton className="mr-8">
            {user ? <ProfileDropDownButton /> : <HiOutlineDotsHorizontal />}
          </DropdownMenuButton>
          <DropDownMenuList className="w-80 mt-5 pt-3">
            {user ? <LoginMenu /> : <LogoutMenu />}

            <DropDownMenuListItem>
              <Link to="/faq" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
                FAQ
              </Link>
            </DropDownMenuListItem>

            <DropDownMenuListItem>
              <Link to="/terms" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
                Terms
              </Link>
            </DropDownMenuListItem>
            <hr />
            <SocialMenu />
          </DropDownMenuList>
        </Dropdown>
      </li>
      <li className="hidden md:block">
        <Button href="/join">Join</Button>
      </li>
      <li className="md:hidden">
        <Button variant="light" className="px-0 py-3" onClick={toggleNavbar}>
          <HiMenu />
        </Button>
      </li>
    </ul>
  );
}

export default MenuItem;
