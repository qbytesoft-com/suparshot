import { Button } from 'components/lib';
import { Dropdown, DropdownMenuButton, DropDownMenuList, DropDownMenuListItem } from 'components/lib/dropdown';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiOutlineDotsHorizontal, HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useNavbarToggle } from './navbarContext';
function MenuItem() {
  let { toggleNavbar } = useNavbarToggle();
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
            <HiOutlineDotsHorizontal />
          </DropdownMenuButton>
          <DropDownMenuList className="w-80 mt-5 pt-3">
            <DropDownMenuListItem>
              <Link to="/login" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
                Login
              </Link>
            </DropDownMenuListItem>

            <DropDownMenuListItem>
              <Link to="/join" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
                Join
              </Link>
            </DropDownMenuListItem>

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

            <ul className="list-none flex px-2">
              <li className="w-full py-4">
                <a
                  href="/"
                  className="flex justify-center hover:bg-gray-900 hover:text-white p-4 rounded-sm transition-all"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="w-full py-4">
                <a
                  href="/"
                  className="flex justify-center hover:bg-gray-900 hover:text-white p-4 rounded-sm transition-all"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="w-full py-4">
                <a
                  href="/"
                  className="flex justify-center hover:bg-gray-900 hover:text-white p-4 rounded-sm transition-all"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="w-full py-4">
                <a
                  href="/"
                  className="flex justify-center hover:bg-gray-900 hover:text-white p-4 rounded-sm transition-all"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
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
