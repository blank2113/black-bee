import "./AdminPage.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import AdminHeader from "../components/adminHeader/AdminHeader";
import AsideMenu from "../components/asideMenu/AsideMenu";
import EditPanel from "../components/editPanel/EditPanel";
import Table from "../components/Table/Table";
import Categories from "../components/categories/Categories";
import AddProdWindow from "../components/addProdWindow/AddProdWindow";
import ConfirmPanel from "../components/confirmPanel/ConfirmPanel";
import ChangeStatus from "../components/changeStatus/ChangeStatus";
import { useGetBrandsQuery } from "../store/middlewares/brandApi";
import { useGetAnimalsQuery } from "../store/middlewares/animalsApi";
import { useGetTypeQuery } from "../store/middlewares/typeApi";
import { useGetProductsQuery } from "../store/middlewares/productsApi";
import { useGetBestProductsQuery } from "../store/middlewares/bestProductApi";
import { useGetBestSalesQuery } from "../store/middlewares/bestSalesApi";
import AddBrandPanel from "../components/addBrandPanel/AddBrandPanel";
import DelBrandPanel from "../components/delBrandPanel/DelBrandPanel";
import AddCategoryPanel from '../components/addCategoryPanel/AddCategoryPanel'
import RemoveCategoryPanel from "../components/removeCategoryPanel/RemoveCategoryPanel";
import AddTypePanel from "../components/addTypePanel/AddTypePanel";
import DelTypePanel from "../components/delTypePanel/DelTypePanel";

const blockAnimation = {
  hidden: {
    y: -200,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
export const variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  hide: {
    y: -200,
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};
function AdminPage() {
  const getStatus = useSelector((state) => state.getStatus.value);
  const getAsideItem = useSelector((state) => state.getAsideItem.value);
  const getActivePanel = useSelector((state) => state.getActivePanel.value);
  const getActiveBtn = useSelector((state) => state.getActiveBtn.value);
  const { data: brand = [] } = useGetBrandsQuery(
    {},
    { pollingInterval: 1000, refetchOnMountOrArgChange: true, skip: false }
  );
  const { data: category = [] } = useGetAnimalsQuery(
    {},
    { pollingInterval: 1000, refetchOnMountOrArgChange: true, skip: false }
  );
  const { data: types = [] } = useGetTypeQuery(
    {},
    { pollingInterval: 1000, refetchOnMountOrArgChange: true, skip: false }
  );
  const {data: product=[]}= useGetProductsQuery({},
    { pollingInterval: 1000, refetchOnMountOrArgChange: true, skip: false })
  const {data: bestProducts=[]}= useGetBestProductsQuery(    {},
    { pollingInterval: 1000, refetchOnMountOrArgChange: true, skip: false })
  const {data: bestSales=[]}=useGetBestSalesQuery(    {},
    { pollingInterval: 1000, refetchOnMountOrArgChange: true, skip: false })
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="admin-page"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={blockAnimation}
        className="admin-page-inner"
      >
        <AdminHeader />
        <motion.div className="admin-page-inner__wrapper">
          <div className="right">
            <AsideMenu />
            <motion.div
              initial="hide"
              animate={getAsideItem === "Список товаров" ? "show" : "hide"}
              variants={variants}
            >
              <Categories />
            </motion.div>
          </div>
          <Table products={product}  bestProducts={bestProducts} bestSales={bestSales}/>
        </motion.div>
        <EditPanel />
        <ConfirmPanel active={getActivePanel} />
          <AddProdWindow brand={brand} category={category} types={types} status={getStatus}/>
         <ChangeStatus active={getActiveBtn}/>
         <AddBrandPanel/>
         <DelBrandPanel brand={brand}/>
         <AddCategoryPanel/>
         <RemoveCategoryPanel category={category}/>
         <AddTypePanel />
         <DelTypePanel types={types}/>
      </motion.div>
    </motion.div>
  );
}

export default AdminPage;
