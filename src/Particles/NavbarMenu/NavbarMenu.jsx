// Styles
import './NavbarMenu.css';
import menuIcon from '../../assets/icon-menu.svg';
const BurgerMenu = ({ action }) => {
  return (
    <img src={menuIcon} alt="Menu" onClick={action} className="Navbar-menu__img"/>
  )
}

export default BurgerMenu