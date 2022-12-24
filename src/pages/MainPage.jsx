import Header from "../components/header/Header";
import TopContent from "../components/top-content/TopContent";
import "./mainPage.css";

import Catalog from "../components/catalog/Catalog";
import BestProducts from "../components/bestProducts/BestProducts";
import BestSales from "../components/bestSales/BestSales";
import Contacts from "../components/contacts/Contacts";
import Footer from "../components/footer/Footer";

function MainPage() {

  return (
    <div className="main-page">
      <Header />
      <TopContent />
      <Catalog/>
      <BestProducts/>
      <BestSales/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default MainPage;
