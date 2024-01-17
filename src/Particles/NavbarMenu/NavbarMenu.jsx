import menuIcon from '../../assets/icon-menu.svg';
const BurgerMenu = ({ action }) => {
  return (
    <img src={menuIcon} alt="Menu" onClick={action}/>
  )
}

export default BurgerMenu