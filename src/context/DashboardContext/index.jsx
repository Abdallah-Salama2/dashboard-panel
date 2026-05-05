import { createContext, useState, useEffect } from "react";
import {
  getStats,
  getStores,
  getSchedule,
  getProducts,
  getRates,
  getSalesPerformance,
  getTransactionActivity,
  getProductStatistics,
} from "../../services/api";

// 1. عملنا الكونتكست
export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  // 2. بنجهز أماكن نشيل فيها الداتا اللي هتيجي من الـ API
  const [stats, setStats] = useState([]);
  const [stores, setStores] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [products, setProducts] = useState([]);
  const [rates, setRates] = useState([]);
  const [salesPerformance, setSalesPerformance] = useState([]);
  const [productsStatistics, setProductsStatistics] = useState([]);
  const [transactionActivity, setTransactionActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllData = async () => {
    try {
      setLoading(true); // بنقول للأبلكيشن "استنى بنحمل"

      setStats(await getStats());
      setStores(await getStores());
      setSchedule(await getSchedule());
      setProducts(await getProducts());
      setRates(await getRates());
      setSalesPerformance(await getSalesPerformance());
      setTransactionActivity(await getTransactionActivity());
      setProductsStatistics(await getProductStatistics());
      //   console.log(s, st, sch, p);
    } catch (error) {
      console.log("في مشكلة حصلت واحنا بنجيب الداتا:", error);
    } finally {
      setLoading(false); // خلصنا تحميل خلاص
    }
  };

  // 4. أول ما الصفحة تفتح، بننادي الدالة اللي فوق دي
  useEffect(() => {
    getAllData();
  }, []);

  // 5. بنبعت الداتا دي لكل اللي محتاجها تحت الـ Provider
  return (
    <DashboardContext.Provider
      value={{
        stats,
        stores,
        schedule,
        products,
        rates,
        salesPerformance,
        transactionActivity,
        productsStatistics,
        loading,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
