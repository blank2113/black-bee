import Header from "../components/header/Header";
import TopContent from "../components/top-content/TopContent";
import "./MainPage.css";
import {motion} from 'framer-motion'
import Catalog from "../components/catalog/Catalog";
import BestProducts from "../components/bestProducts/BestProducts";
import BestSales from "../components/bestSales/BestSales";
import Contacts from "../components/contacts/Contacts";
import Footer from "../components/footer/Footer";


function MainPage() {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    className="main-page">
      <Header />
      <TopContent />
      <Catalog/>
      <BestProducts/>
      <BestSales/>
      <Contacts/>
      <Footer/>
    </motion.div>
  );
}

export default MainPage;
