// Styles
import './Navbar.css';
// Components
import NavbarMenu from "../../Particles/NavbarMenu/NavbarMenu"
import ProfileAvatar from "../../Particles/ProfileAvatar/ProfileAvatar"
import ShopCart from "../../Particles/ShopCart/ShopCart"
// Assets
import logoImg from '../../assets/logo.svg'
const Navbar = () => {
  return (
    <div className="Navbar">
      <NavbarMenu />
      <img className="Navbar__logo" src={logoImg} alt="Sneakers logo" />
      <ShopCart />
      <ProfileAvatar />
    </div>
  )
}

export default Navbar