// Styles
import './ShopCart.css';
// Assets
import cartIcon from '../../assets/icon-cart.svg';

const ShopCart = () => {
  return (
    <div>
      <img
      src={cartIcon}
      alt="Shopping Cart"
      className="Shopcart__img"
      />
    </div>
  )
}

export default ShopCart