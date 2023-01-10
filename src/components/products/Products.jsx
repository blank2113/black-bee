import { useGetProductsQuery } from "../../store/middlewares/productsApi";
import { useSelector } from "react-redux";
import "./products.css";
import { motion, AnimatePresence } from "framer-motion";

function Products() {
  const getType = useSelector((state) => state.getType.value);
  const typeId = useSelector((state) => state.getId.typeId);
  const { data = [] } = useGetProductsQuery(
    {},
    { pollingInterval: 3000, refetchOnMountOrArgChange: true, skip: false }
  );
  return (
    <AnimatePresence>
      <div className="products">
        <div>
          {getType === 10 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
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
              transition={{ duration: 0.6 }}
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
