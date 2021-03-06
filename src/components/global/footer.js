import React from 'react';
import { Link } from 'react-router-dom';
import Brand from './navbar/brand';

function Footer(props) {
  return (
    <footer className="w-full h-auto bg-blue-800 text-gray-300 px-8 py-4 flex gap-4 md:gap-0 flex-col md:flex-row md:justify-between items-center">
      <Brand />
      <ul className="list-none flex flex-wrap items-center gap-2 md:gap-4 font-semibold">
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
