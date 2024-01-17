// Styles
import './Navbar.css';
// Components
import NavbarMenu from "../../Particles/NavbarMenu/NavbarMenu"
import ProfileAvatar from "../../Particles/ProfileAvatar/ProfileAvatar"
import ShopCart from "../../Particles/ShopCart/ShopCart"
import Logo from '../../Particles/Logo/Logo';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__menu-logo navbar-container">
        <NavbarMenu />
        <Logo />
      </div>
      <div className="Navbar__shopcart-profileavatar navbar-container">
        <ShopCart />
        <ProfileAvatar />
      </div>
    </div>
  )
}

export default Navbar