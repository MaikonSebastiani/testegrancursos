import React, { InputHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import { Container, Img } from './styles';
import productImage from '../../assets/images/product.png';

interface ProductProps extends InputHTMLAttributes<HTMLDivElement> {
  title: string
}

const Product: React.FC<ProductProps> = ({ title }) => {
  const t = '';

  return (
    <Container>
      <div className="productContent">
        <Img backgroundImage={productImage} />

        <div className="describe">
          <p className="title">{title}</p>
          <p className="by">
            By
            {' '}
            <strong>Apple</strong>
          </p>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            a type specimen book.
          </p>
        </div>
      </div>

      <div className="productInfo">
        <div className="ranking">
          <p>
            3.4
            {' '}
            <FontAwesomeIcon icon={faStar} />
          </p>
        </div>

        <p className="price">R$ 399</p>
        <span className="shipping">
          <FontAwesomeIcon icon={faShoppingCart} />
          {' '}
          Free Shipping
        </span>

        <button type="button" className="wish">
          <FontAwesomeIcon icon={faHeart} />
          WISHLIST
        </button>
        <button type="button" className="add">
          <FontAwesomeIcon icon={faShoppingBasket} />
          ADD TO CART
        </button>
      </div>
    </Container>
  );
};

export default Product;
