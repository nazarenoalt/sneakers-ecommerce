// Core
import { useDocumentContext } from '../../Context/DocumentProvider';
// Styles
import './Navbar.css';
// Components
import NavbarMenu from "../../Particles/NavbarMenu/NavbarMenu"
import ProfileAvatar from "../../Particles/ProfileAvatar/ProfileAvatar"
import ShopCart from "../../Particles/ShopCart/ShopCart"
import Logo from '../../Particles/Logo/Logo';
// Other

const Navbar = () => {
  const documentWidth = useDocumentContext();
  console.log(documentWidth);
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
      {documentWidth}
    </div>
  )
}

export default Navbar