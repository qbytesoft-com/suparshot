import { DropDownMenuListItem } from 'components/lib/dropdown';
import { Link } from 'react-router-dom';
function LoginMenu() {
  return (
    <>
      <DropDownMenuListItem>
        <Link to="/me" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
          Profile
        </Link>
      </DropDownMenuListItem>
      <DropDownMenuListItem>
        <Link to="/me/collections" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
          Collections
        </Link>
      </DropDownMenuListItem>
      <DropDownMenuListItem>
        <Link to="/settings" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
          Settings
        </Link>
      </DropDownMenuListItem>
      <DropDownMenuListItem>
        <Link to="/logout" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
          Logout
        </Link>
      </DropDownMenuListItem>
      <hr />
    </>
  );
}
export default LoginMenu;
