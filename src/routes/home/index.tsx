import { useEffect, useState } from "react";
import { Col } from "antd";
// components
import Searcher from "../../components/common/Searcher";
import ListProducts from "../../views/Products/ListProcust";
import { getLatestProducts } from "../../api/service/setProducts";
import { relogin } from "../../api/service/accessibility";
import "./index.css";

const Home = ({product, setProducts}:{product:any; setProducts:any;}) => {
  
  useEffect(() => {
    const fetchGetProducts = async () => {
      
      try {
        relogin()
        const getproducts = await getLatestProducts();
      setProducts(getproducts);
      console.log(getproducts)
        
      } catch (error) {
        console.log(error)
      }
      
    };
    fetchGetProducts();
  }, []);

  return (
    <div>
      <Col span={8} offset={8} className="Searcher">
        <Searcher />
      </Col>
      <ListProducts product={product} />
    </div>
  );
};

export default Home;
