import { Dropdown, DropdownMenuButton, DropDownMenuList, DropDownMenuListItem } from 'components/lib/dropdown';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
function TitleTabs() {
  return (
    <div className="flex justify-between mb-3">
      <p className="text-gray-900 text-base font-semibold">Free Stock Photos</p>

      <Dropdown>
        <DropdownMenuButton>
          <div className="flex items-center font-semibold">
            <p className="text-sm">Trending</p>
            <IoMdArrowDropdown size="1em" />
          </div>
        </DropdownMenuButton>
        <DropDownMenuList className="mt-3 w-48 py-3">
          <DropDownMenuListItem>
            <Link to="/tending" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
              Trending
            </Link>
          </DropDownMenuListItem>
          <DropDownMenuListItem>
            <Link to="/new" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
              New
            </Link>
          </DropDownMenuListItem>
          <DropDownMenuListItem>
            <Link to="/following" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
              Following
            </Link>
          </DropDownMenuListItem>
        </DropDownMenuList>
      </Dropdown>
    </div>
  );
}

export default TitleTabs;
