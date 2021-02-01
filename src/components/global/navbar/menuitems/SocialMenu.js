import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function SocialMenu() {
  return (
    <ul className="list-none flex px-2">
      <li className="w-full py-4">
        <a href="/" className="flex justify-center hover:bg-gray-900 hover:text-white p-4 rounded-sm transition-all">
          <FaFacebookF />
        </a>
      </li>
      <li className="w-full py-4">
        <a href="/" className="flex justify-center hover:bg-gray-900 hover:text-white p-4 rounded-sm transition-all">
          <FaTwitter />
        </a>
      </li>
      <li className="w-full py-4">
        <a href="/" className="flex justify-center hover:bg-gray-900 hover:text-white p-4 rounded-sm transition-all">
          <FaInstagram />
        </a>
      </li>
      <li className="w-full py-4">
        <a href="/" className="flex justify-center hover:bg-gray-900 hover:text-white p-4 rounded-sm transition-all">
          <FaYoutube />
        </a>
      </li>
    </ul>
  );
}

export default SocialMenu;
