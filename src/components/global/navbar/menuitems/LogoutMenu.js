import { DropDownMenuListItem } from 'components/lib/dropdown';
import { Link } from 'react-router-dom';
function LogoutMenu() {
  return (
    <>
      <DropDownMenuListItem>
        <Link to="/login" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
          Login
        </Link>
      </DropDownMenuListItem>

      <DropDownMenuListItem>
        <Link to="/join" className="hover:bg-gray-100 block px-3 py-2 text-gray-600">
          Join
        </Link>
      </DropDownMenuListItem>
    </>
  );
}

export default LogoutMenu;
