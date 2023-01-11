import Header from "../components/header/Header";
import TopContent from "../components/top-content/TopContent";
import "./MainPage.css";
import { motion } from "framer-motion";
import Catalog from "../components/catalog/Catalog";
import BestProducts from "../components/bestProducts/BestProducts";
import BestSales from "../components/bestSales/BestSales";
import Contacts from "../components/contacts/Contacts";
import Footer from "../components/footer/Footer";
import { useGetTypeQuery } from "../store/middlewares/typeApi";
import { useGetAnimalsQuery} from '../store/middlewares/animalsApi'
import {useGetProductsQuery} from '../store/middlewares/productsApi'
import {useGetBestProductsQuery} from '../store/middlewares/bestProductApi'
import {useGetBestSalesQuery} from '../store/middlewares/bestSalesApi'

function MainPage() {
  const { data: types = [] } = useGetTypeQuery(
    {},
    { pollingInterval: 1000, refetchOnMountOrArgChange: true, skip: false }
  );
  const { data: animals = [] } = useGetAnimalsQuery(
    {},
    { pollingInterval: 1000, refetchOnMountOrArgChange: true, skip: false }
  );
  const { data: products = [] } = useGetProductsQuery(
    {},
    { pollingInterval: 1000, refetchOnMountOrArgChange: true, skip: false }
  );
  const { data: bestProducts = [] } = useGetBestProductsQuery(
    {},
    { pollingInterval: 1000, refetchOnMountOrArgChange: true, skip: false }
  );
  const { data: bestSales = [] } = useGetBestSalesQuery(
    {},
    { pollingInterval: 1000, refetchOnMountOrArgChange: true, skip: false }
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="main-page"
    >
      <Header />
      <TopContent />
      <Catalog types={types} animals={animals} products={products}/>
      <BestProducts bestProducts={bestProducts}/>
      <BestSales bestSales={bestSales}/>
      <Contacts />
      <Footer />
    </motion.div>
  );
}

export default MainPage;
