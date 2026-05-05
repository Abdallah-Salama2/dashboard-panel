import { Routes, Route, Navigate } from "react-router";

import { useAuth } from "./context/AuthContext"; // الدفتر بتاعنا
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
function App() {
  const { user } = useAuth(); // بنشوف في يوزر متسجل ولا لأ

  // لو مفيش يوزر، بنعرض صفحة اللوجن بس من غير NavBar ولا SideBar
  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  // لو في يوزر (عمل Login)، بنعرض الشكل الكامل بتاع الداشبورد
  return (
    <div
      className="container-fluid p-0 min-vh-100"
      style={{ backgroundColor: "#F4F7FE" }}
    >
      <div
        className="row g-0 bg-white border-0 "
        style={{ position: "sticky", top: 0, zIndex: 1030 }}
      >
        <NavBar />
      </div>

      <div className="row g-0 p-0">
        {/* السايد بار بيظهر بس لما اليوزر يدخل */}
        <aside
          className="col-auto d-none d-md-flex d-none d-md-block"
          style={{
            position: "sticky",
            top: "75px",
            height: "calc(100vh - 75px)",
            zIndex: 1020,
          }}
        >
          <SideBar className={""} />
        </aside>

        <main className="col ms-0 ms-md-2 p-2">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            {/* لو دخل على الـ root نوديه للداشبورد أوتوماتيك */}
            <Route path="/" element={<Navigate to="/dashboard" />} />
            {/* لو حاول يفتح اللوجن وهو مسجل دخول نرجعه للداشبورد */}
            <Route path="/login" element={<Navigate to="/dashboard" />} />
          </Routes>
          {/* <div className="col-12 e">
            <div
              className="alert alert-info text-center bg-black vh-100"
              role="alert"
            >
              For better experience, please use a larger screen.
            </div>
          </div> */}
        </main>
      </div>
    </div>
  );
}

export default App;
