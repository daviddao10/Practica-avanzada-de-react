// library
import { useEffect, useState } from "react";
import { Col, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
// components
import Searcher from "../../components/common/Searcher";
import ListProducts from "../../views/Products/ListProcust";
import { getLatestProducts } from "../../api/service/setProducts";
import { relogin } from "../../api/service/accessibility";
import { setLoading, setProducts } from "../../redux/action/action";

// types
import { TypeProducts } from "../../Types/Products";

//css
import "./index.css";

//{products, setProducst}:{products:any; setProducst:any;}

const Home = () => {

  const products = useSelector((state: any) => state.Reducer.products);
  const loading = useSelector((state: any) => state.Reducer.loadingProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGetProducts = async () => {
      try {
        dispatch(setLoading(true));
        // relogin();
        const getproducts = await getLatestProducts();
        dispatch(setProducts(getproducts));
        dispatch(setLoading(false));
      } catch (error) {
        console.log(
          "🚀 ~ file: index.tsx:40 ~ fetchGetProducts ~ error",
          error
        );
      }
    };
    fetchGetProducts();
  }, []);

  return (
    <div>
      <Col span={8} offset={8} className="Searcher">
        <Searcher />
      </Col>

      {loading ? (
        <Col offset={0}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <ListProducts product={products} />
      )}
    </div>
  );
};

export default Home;
