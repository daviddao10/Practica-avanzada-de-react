import { useNavigate,Link } from 'react-router-dom';
import Product from "./CardProducts";
import { TypeProducts } from "../../Types/Products";



import './ListProducst.css'



const ListProducts = ({ product }: { product: Array<TypeProducts>}) => {
  
 
     

   if (product.length===0) {
    return(<div className="ListProducts">
      <h1>No se encontro lo que buscabas </h1>
    </div>)
   }

  
  return (
    <div className="ListProducts">
      {product.map((produc) => {
        return <Link to={`/home/${produc.id}`} className="link" key={produc.id} ><Product {...produc} /></Link>;
      })}
    </div>
  );
};

export default ListProducts;
