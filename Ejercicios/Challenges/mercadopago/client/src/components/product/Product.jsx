import axios from "axios";
import {useState} from "react";

import style from "./Product.module.css";

function Product({product}) {
  const {id, title, image, stock, condition, price} = product;
  const [quantity, setQuantity] = useState(1);

  const purchaseHandler = () => {
    axios
      .post("http://localhost:3001/payment/order", {...product, quantity})
      .then((response) => {
        window.location.href = response.data.response.body.init_point;
      })
      .catch((error) => console.log(error.message));
  };

  const addProduct = () => {
    product.stock > 1 && quantity < product.stock
      ? setQuantity(quantity + 1)
      : null;
  };

  const removeProduct = () => {
    quantity > 1 ? setQuantity(quantity - 1) : null;
  };

  return (
    <div className={style.container}>
      <img src={image} alt={id} />

      <div className={style.content}>
        <h2>{title}</h2>
        <p>Stock:{stock}</p>
        <p>Condition:{condition}</p>
        <h3>Price: {price}</h3>
        <p>{quantity}</p>
      </div>

      <div className={style.buttons}>
        <button onClick={removeProduct}>-</button>
        <button onClick={purchaseHandler}>Purchase</button>
        <button onClick={addProduct}>+</button>
      </div>
    </div>
  );
}

export default Product;
