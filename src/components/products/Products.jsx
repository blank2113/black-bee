import { useSelector } from "react-redux";
import "./products.css";

function Products({ data }) {
  const getType = useSelector((state) => state.getType.value);
  const typeId = useSelector((state) => state.getId.typeId);

  return (
    <div className="products">
      <div>
        {getType === 10 ? (
          <div className="products-inner ">
            {data
              .filter((el) => el.type.id === typeId)
              .map((item) => (
                <div key={item.id}>
                  <div className="products-inner__card-wrapper">
                    <li key={item.key}>
                      <img src={item.image} alt="product-img" />
                      <p>{item.name}</p>
                      <span>{item.price} cум</span>
                    </li>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="products-inner">
            {data
              .filter((el) => el.category && el.type)
              .filter(
                (elem) =>
                  elem.category.id === getType && elem.type.id === typeId
              )
              .map((item) => (
                <div key={item.id}>
                  <div className="products-inner__card-wrapper">
                    <li>
                      <img
                        src={`https://api.blackbee.uz${item.image}`}
                        alt="product-img"
                      />
                      <p>{item.name}</p>
                      <span>{item.price} cум</span>
                    </li>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
