import { createContext, useState, useContext, useEffect } from "react";

// 1. عمل الدفتر نفسه (Context)
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  // حالة اليوزر (هل هو موجود ولا null)
  const [user, setUser] = useState(() => {
    // أول ما الـ App يفتح، بنشوف هل فيه يوزر متسجل في الـ Browser (localStorage)؟
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // فنكشن لتسجيل الدخول
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // بنحفظه في المتصفح عشان لو عمل Refresh ميعملش Logout
  };

  // فنكشن لتسجيل الخروج
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook مخصص عشان يسهل علينا استخدام الدفتر ده في أي مكان
