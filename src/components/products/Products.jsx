import { useSelector } from "react-redux";
import "./products.css";
import { motion, AnimatePresence } from "framer-motion";

function Products({ data }) {
  const getType = useSelector((state) => state.getType.value);
  const typeId = useSelector((state) => state.getId.typeId);

  return (
    <AnimatePresence>
      <div className="products">
        <div>
          {getType === 10 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="products-inner "
            >
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
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="products-inner"
            >
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
                        <img src={item.image} alt="product-img" />
                        <p>{item.name}</p>
                        <span>{item.price} cум</span>
                      </li>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Products;
