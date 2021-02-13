import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavbarToggle } from './navbarContext';
function MobileNavMenu() {
  let { navbarOpen, toggleNavbar } = useNavbarToggle();
  // eslint-disable-next-line no-unused-vars
  let [user, setUser] = React.useState(true);
  return navbarOpen ? (
    <div
      className="navbar-main-mobile pt-20 h-screen w-screen bg-gray-900 px-5 fixed z-20"
      onClick={() => toggleNavbar()}
    >
      <ul className="list-none h-auto">
        <li className="py-3">
          <Link to="/" className="text-gray-200 hover:text-white">
            Home
          </Link>
        </li>
        <hr />
        {user ? (
          <>
            <li className="py-3">
              <Link to="/me" className="text-gray-200 hover:text-white">
                Profile
              </Link>
            </li>
            <li className="py-3">
              <Link to="/me/collections" className="text-gray-200 hover:text-white">
                Collections
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="py-3">
              <Link to="/login" className="text-gray-200 hover:text-white">
                Login
              </Link>
            </li>
            <li className="py-3">
              <Link to="/joinas" className="text-gray-200 hover:text-white">
                Singup
              </Link>
            </li>
          </>
        )}
        <li className="py-3">
          <Link to="/upload" className="text-gray-200 hover:text-white">
            Upload
          </Link>
        </li>
        <hr />
        <li className="py-3">
          <Link to="/explore" className="text-gray-200 hover:text-white">
            Explore
          </Link>
        </li>
        <li className="py-3">
          <Link to="/explore" className="text-gray-200 hover:text-white">
            License
          </Link>
        </li>
        <hr />
        <li className="py-3">
          <Link to="/faq" className="text-gray-200 hover:text-white">
            FAQ
          </Link>
        </li>
        <li className="py-3">
          <Link to="/about" className="text-gray-200 hover:text-white">
            Abou us
          </Link>
        </li>
        <li className="py-3">
          <Link to="/terms" className="text-gray-200 hover:text-white">
            Terms
          </Link>
        </li>
      </ul>

      <ul className="list-none flex px-2">
        <li className="w-full py-4">
          <a
            href="/"
            className="flex justify-center hover:text-gray-900 text-white hover:bg-white p-4 rounded-sm transition-all"
          >
            <FaFacebookF />
          </a>
        </li>
        <li className="w-full py-4">
          <a
            href="/"
            className="flex justify-center hover:text-gray-900 text-white hover:bg-white p-4 rounded-sm transition-all"
          >
            <FaTwitter />
          </a>
        </li>
        <li className="w-full py-4">
          <a
            href="/"
            className="flex justify-center hover:text-gray-900 text-white hover:bg-white p-4 rounded-sm transition-all"
          >
            <FaInstagram />
          </a>
        </li>
        <li className="w-full py-4">
          <a
            href="/"
            className="flex justify-center hover:text-gray-900 text-white hover:bg-white p-4 rounded-sm transition-all"
          >
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  ) : null;
}

export default MobileNavMenu;
