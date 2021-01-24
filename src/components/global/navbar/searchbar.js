import { Button } from 'components/lib';
import { GoSearch } from 'react-icons/go';
function SearchBar() {
  return (
    <div className="searchbar relative mr-5 overflow-hiddent">
      <input
        type="text"
        className="searchbar-input w-full h-full rounded-md px-3 outline-none overflow-hidden"
        placeholder="Search for free photos"
      />
      <Button variant="light" className="absolute top-0 right-0 flex items-center justify-center h-full px-3">
        <GoSearch />
      </Button>
    </div>
  );
}
export default SearchBar;
