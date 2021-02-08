import React from 'react';
import { Dropdown, DropdownMenuButton, DropDownMenuList, DropDownMenuListItem, Button } from 'components/lib';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { FaChevronDown } from 'react-icons/fa';

function SingleImgModalHeader(props) {
  const [liked, setLiked] = React.useState(false);
  const toggleLike = () => setLiked(!liked);
  let active = liked ? 'active' : '';
  let likeBtnStyle = 'border border-gray-300 text-sm hover:shadow btn gap-3 text-gray-900 ' + active;
  return (
    <div className="w-100 flex justify-between">
      <div className="flex gap-3 items-center">
        <img
          src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
          alt="user"
          className="w-12 h-12 rounded-1/2 object-cover object-center"
        />

        <div className="flex items-center gap-4">
          <div>
            <Link to="/me" className="text-base font-semibold text-gray-900">
              Maruf Ahmed
            </Link>
            <p className="font-light text-xs text-gray-600">300 followers</p>
          </div>

          <div className="flex gap-3">
            <Button variant="light" className="border border-gray-300 rounded h-8 px-2 text-sm hover:shadow">
              Follow
            </Button>

            <Button variant="light" className="border border-gray-300 rounded h-8 px-2 text-sm hover:shadow">
              Donate
            </Button>
          </div>
        </div>
      </div>

      <div className="singleImgModalActionsBtn flex items-center gap-3">
        <Button variant="light" className={likeBtnStyle} onClick={toggleLike}>
          <AiOutlineHeart size="1.5rem" />
          <span className="text-sm font-light">3000 Likes</span>
        </Button>

        {/* <Button
                  variant="light"
                  className="border border-gray-400 rounded py-0 px-4 text-sm hover:shadow flex gap-3 items-center text-gray-900"
                >
                  <IoMdAddCircleOutline size="1.5rem" />
                  <span className="text-sm font-light">Collect</span>
                </Button> */}

        <Dropdown>
          <DropdownMenuButton>
            <div className="bg-green-600 px-6 text-white btn gap-3">
              <span>Free Download</span>
              <FaChevronDown size="0.8rem" />
            </div>
          </DropdownMenuButton>
          <DropDownMenuList className="w-48 pt-3 rounded shadow-md">
            <DropDownMenuListItem>
              <p className="text-gray-900 pb-3 px-3">Choose a size: </p>
            </DropDownMenuListItem>
            <DropDownMenuListItem>
              <Link to="/" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
                Original <span className="text-sm font-light">(2200 X 1467)</span>
              </Link>
            </DropDownMenuListItem>
            <DropDownMenuListItem>
              <Link to="/" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
                Medium <span className="text-sm font-light">(1280 X 853)</span>
              </Link>
            </DropDownMenuListItem>
            <DropDownMenuListItem>
              <Link to="/" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
                Small <span className="text-sm font-light">(624 X 426)</span>
              </Link>
            </DropDownMenuListItem>
          </DropDownMenuList>
        </Dropdown>
      </div>
    </div>
  );
}

export default SingleImgModalHeader;
