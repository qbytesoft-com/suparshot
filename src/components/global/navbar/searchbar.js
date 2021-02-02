import { Button } from 'components/lib';
import { GoSearch } from 'react-icons/go';
function SearchBar({ className = '' }) {
  let style = 'searchbar relative mr-5 overflow-hidden ' + className;
  return (
    <div className={style}>
      <input
        type="text"
        className="searchbar-input w-full h-full rounded-md px-3 outline-none overflow-hidden"
        placeholder="Search for free photos"
      ></input>
      <Button
        variant="light"
        className="absolute top-0 right-0 flex items-center justify-center h-full px-3 bg-white rounded-md"
      >
        <GoSearch />
      </Button>
    </div>
  );
}
export default SearchBar;
