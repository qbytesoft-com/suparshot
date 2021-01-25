import { Menu, MenuButton, MenuList } from '@reach/menu-button';

function DropdownMenuButton({ className = '', children }) {
  let style = 'focus:outline-none flex items-center ' + className;
  return <MenuButton className={style}>{children}</MenuButton>;
}

function DropDownMenuList({ className = '', children }) {
  let style = 'bg-white outline-none pt-3 rounded-sm shadow ' + className;
  return <MenuList className={style}>{children}</MenuList>;
}
function DropDownMenuListItem({ children }) {
  return children;
}

function Dropdown({ children }) {
  return <Menu>{children}</Menu>;
}

export { Dropdown, DropdownMenuButton, DropDownMenuList, DropDownMenuListItem };
