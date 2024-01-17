// Styles
import './Logo.css';
// Assets
import logoImg from '../../assets/logo.svg'
const Logo = () => {
  return (
    <img className="Navbar__logo" src={logoImg} alt="Sneakers logo" />
  )
}

export default Logo