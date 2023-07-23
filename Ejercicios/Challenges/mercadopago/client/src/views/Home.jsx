import {data} from "../assets/data";
import ProductList from "../components/productList/ProductList";

function Home() {
  return (
    <div>
      <ProductList products={data} />
    </div>
  );
}

export default Home;
