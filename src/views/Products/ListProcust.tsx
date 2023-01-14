import Product from "./CardProducts";
import { TypeProducts } from "../../Types/Products";


const ListProducts = ({ product }: { product: Array<TypeProducts>}) => {
   if (product.length===0) {
    return(<div className="ListProducts">
      <h1>No se encontro lo que buscabas </h1>
    </div>)
   }

  
  return (
    <div className="ListProducts">
      {product.map((produc) => {
        return <Product {...produc} key={produc.id} />;
      })}
    </div>
  );
};

export default ListProducts;
