import React from "react";
import { useGetProductsQuery } from "../../store/middlewares/productsApi";
import { useSelector } from "react-redux";
import "./products.css";

function Products() {
  const getType = useSelector((state) => state.getType.value);
  const { data = [] } = useGetProductsQuery();

  return (
    <div className="products">
      <div>
        {data
          .filter((el) => el.name === getType)
          .map((item) => (
            <div key={item.id} className="products-inner container">
              <h3>{item.type}</h3>
              <div className="products-inner__card-wrapper">
                {item.items.map((el) => (
                  <li key={el.key}>
                    <img src={el.picture} alt="1" />
                    <p>{el.brand}</p>
                    <span>{el.price} cум</span>
                  </li>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
