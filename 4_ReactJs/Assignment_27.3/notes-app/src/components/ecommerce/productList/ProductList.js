import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, loadProducts } from "../../../redux/slices/productSlice";
import SingleProduct from "../singleProduct/SingleProduct";
import "./ProductList.css";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const status = useSelector((state) => state.productReducer.status);
  const error = useSelector((state) => state.productReducer.error);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (status == "loading") {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }
  if (status === "failed") {
    return (
      <>
        <h3>Uh oh|</h3>
        <p>{error}</p>
      </>
    );
  }
  return (
    <div className="productList">
      {products.map((item) => (
        <SingleProduct key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;
