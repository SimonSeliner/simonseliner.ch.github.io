import MenuItem from './MenuItem/MenuItem';
import './Menu.scss';

const Menu = (): JSX.Element => {
  return (
    <div>
      <MenuItem link="https://google.com" name="About Me" />
      <MenuItem link="https://google.com" name="Contact" />
    </div>
  );
};

export default Menu;
