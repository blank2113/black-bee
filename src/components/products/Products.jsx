import React from "react";
import { useGetProductsQuery } from "../../store/middlewares/productsApi";
import { useSelector } from "react-redux";
import "./products.css";

function Products() {
  const getType = useSelector((state) => state.getType.value);
  const { data = [] } = useGetProductsQuery(
    {},
    { pollingInterval: 3000, refetchOnMountOrArgChange: true, skip: false }
  );
  console.log(
    data
      .filter((el) => el.category)
      .filter((elem) => elem.category.id === getType)
  );
  return (
    <div className="products">
      <div>
        {getType === 10
          ? data.map((item) => (
              <div key={item.id} className="products-inner container">
                <h3>asd</h3>
                <div className="products-inner__card-wrapper">
                  <li key={item.key}>
                    <img src={item.image} alt="product-img" />
                    <p>{item.name}</p>
                    <span>{item.price} cум</span>
                  </li>
                </div>
              </div>
            ))
          : data
              .filter((el) => el.category)
              .filter((elem) => elem.category.id === getType)
              .map((item) => (
                <div key={item.id} className="products-inner container">
                  <h3>{item.type ? item.type.name : null}</h3>
                  <div className="products-inner__card-wrapper">
                    <li>
                      <img src={item.image} alt="product-img" />
                      <p>{item.name}</p>
                      <span>{item.price} cум</span>
                    </li>
                  </div>
                </div>
              ))}
      </div>
    </div>
  );
}

export default Products;
