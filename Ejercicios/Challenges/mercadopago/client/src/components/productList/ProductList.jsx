import Product from "../product/Product";

import style from "./ProductList.module.css";

function ProductList({products}) {
  return (
    <div className={style.list}>
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
