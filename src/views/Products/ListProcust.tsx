import Product from "./CardProducts";
import { TypeProducts } from "../../Types/Products";

const ListProducts = ({ product }: { product: Array<TypeProducts> }) => {
  return (
    <div className="ListProducts">
      {product.map((produc) => {
        return <Product {...produc} />;
      })}
    </div>
  );
};

export default ListProducts;
