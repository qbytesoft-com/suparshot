import React from 'react';
import { Link } from 'react-router-dom';
import Brand from './navbar/brand';

function Footer(props) {
  return (
    <footer className="w-full h-auto bg-blue-800 text-gray-300 px-8 py-4 flex justify-between items-center">
      <Brand />
      <ul className="list-none flex items-center gap-4 font-semibold">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/term">Terms of Use</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy Policy</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
