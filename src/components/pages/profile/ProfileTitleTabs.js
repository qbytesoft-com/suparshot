import React from 'react';
import { Dropdown, DropdownMenuButton, DropDownMenuList, DropDownMenuListItem } from 'components/lib';
import { NavLink, Link } from 'react-router-dom';
import { FaSortDown } from 'react-icons/fa';
import { useProfileContext } from './ProfileContextProvider';
function ProfileTitleTabs() {
  let { photos } = useProfileContext();
  return (
    <div className="flex justify-between mb-3">
      <div className="flex gap-4 profile-tab-links">
        <NavLink exact to="/me" className="font-semibold text-sm text-gray-600">
          {photos?.length} Photos
        </NavLink>
        <NavLink to="/me/collection" className="font-semibold text-sm text-gray-600">
          Collection
        </NavLink>
        <NavLink to="/me/stats" className="font-semibold text-sm text-gray-600">
          Stats
        </NavLink>
      </div>

      <div className="hidden md:flex md:gap-4">
        <Dropdown>
          <DropdownMenuButton>
            <div className="flex items-center gap-4">
              <p className="font-light text-gray-400">Sort by: </p>
              <div className="flex items-center gap-1">
                <p className="font-semibold text-gray-900">Recency</p>
                <FaSortDown />
              </div>
            </div>
          </DropdownMenuButton>
          <DropDownMenuList className="w-32 pt-3">
            <DropDownMenuListItem>
              <Link to="/me?sortby=recency" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
                Recency
              </Link>
            </DropDownMenuListItem>
            <DropDownMenuListItem>
              <Link to="/me?sortby=popularity" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
                Popularity
              </Link>
            </DropDownMenuListItem>
          </DropDownMenuList>
        </Dropdown>
      </div>
    </div>
  );
}

export default ProfileTitleTabs;
