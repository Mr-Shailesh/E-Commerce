import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetaitsSelector,
  getProductLoadingSelector,
} from "../../store/Product/ProductSelector";
import { getProductData } from "../../store/Product/ProductAction";
import Loader from "../../components/Loader";

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useSelector(getProductDetaitsSelector);
  const isLoading = useSelector(getProductLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductData());
  }, []);
  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="CategoryContainer">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
