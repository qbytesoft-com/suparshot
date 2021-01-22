import Button from 'components/lib/button/button';
import { GoSearch } from 'react-icons/go';
function Navbar() {
  return (
    <div className="navbar-main">
      <a href="/" className="brand-name text-white font-bold text-2xl mr-5">
        SuperShot
      </a>
      <div className="searchbar relative">
        <input
          type="text"
          className="searchbar-input w-full h-full rounded-md px-3"
          placeholder="Search for free photos"
        />
        <GoSearch className="absolute top-1/2 transform -translate-y-1/2 right-4" />
      </div>
      <ul className="navbar-main p-0 m-0 list-none flex ml-auto text-white">
        <li>
          <a href="/" className="mr-8">
            Explore
          </a>
        </li>
        <li>
          <a href="/" className="mr-8">
            License
          </a>
        </li>
        <li>
          <a href="/" className="mr-8">
            Upload
          </a>
        </li>
        <li>
          <Button href="/">Join</Button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
