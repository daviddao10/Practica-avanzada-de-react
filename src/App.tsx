import React from "react";
import { connect } from "react-redux";
import "./App.css";
//views
import { setProducts } from "./redux/action";
import Home from "./routes/home";

function App({product, setProducts}:{product:any; setProducts:any;}) {
  return (
    <div className="App">
      hola putos
      <Home />
    </div>
  );
}
const mapStateToProps = (state: any) => ({
  products: state.products,
});

const mapDispacthToProps = (dispatch:any) => ({
  setProducst: (pro: object) => dispatch(setProducts(pro)),
});
//export default App;
export default connect(mapStateToProps,mapDispacthToProps)(App);
