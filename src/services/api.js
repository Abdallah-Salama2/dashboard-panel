import axios from "axios";

// ده العنوان الثابت للسيرفر بتاعنا
const url = "http://localhost:5000";

export const getUsers = async () => {
  const res = await axios.get(`${url}/users`);
  return res.data;
};

// دالة تجيب بيانات الاحصائيات
export const getStats = async () => {
  const res = await axios.get(`${url}/stats`);
  return res.data;
};

// دالة تجيب بيانات المحلات
export const getStores = async () => {
  const res = await axios.get(`${url}/stores`);
  return res.data;
};

// دالة تجيب المواعيد (الجدول)
export const getSchedule = async () => {
  const res = await axios.get(`${url}/schedule`);
  return res.data;
};

// دالة تجيب المنتجات
export const getProducts = async () => {
  const res = await axios.get(`${url}/products`);
  return res.data;
};
export const getRates = async () => {
  const res = await axios.get(`${url}/conversionRate`);
  return res.data;
};
export const getProductStatistics = async () => {
  const res = await axios.get(`${url}/productStatistics`);
  return res.data;
};
export const getSalesPerformance = async () => {
  const res = await axios.get(`${url}/salesPerformance`);
  return res.data;
};
export const getTransactionActivity = async () => {
  const res = await axios.get(`${url}/transactionActivity`);
  return res.data;
};

export const loginUser = async (username, password) => {
  const res = await axios.get(`${url}/users`);
  const user = res.data.find(
    (u) => u.username === username && u.password === password,
  );
  return user;
};
