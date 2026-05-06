import React from "react";
import NavItem from "./components/NavItem";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";
export default function SideBar({ className }) {
  const menuItems = [
    { icon: "fa-brands fa-microsoft", path: "/dashboard" },
    { icon: "fa-solid fa-chart-line", path: "/charts" },
    { icon: "fa-solid fa-cubes", path: "/products" },
    { icon: "fa-solid fa-people-group", path: "/users" },
    { icon: "fa-solid fa-bell", path: "/notifications" },
    { icon: "fa-solid fa-inbox", path: "/inbox" },
    { icon: "fa-solid fa-list-ul", path: "/list" },
    { icon: "fa-solid fa-table-cells", path: "/table" },
    { icon: "fa-solid fa-gear", path: "/settings" },
  ];
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const { logout } = useAuth(); // بنسحب فنكشن الخروج من الدفتر
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // بترجعك لصفحة اللوجن
  };
  // فصلنا الأيقونات: أول 10 فوق، وآخر 2 تحت
  // const topMenu = allIcons.slice(0, 10);
  // const bottomMenu = allIcons.slice(10, 12);

  return (
    <div
      className={`sticky-bottom d-flex flex-column align-items-center py-4 bg-transparent  border-0    ${className}`}
      style={{
        width: 70,
        height: "calc(100vh - 74.91px)",
        background: "#F4F7FE",
      }}
    >
      <div className="d-flex flex-column gap-1 w-100">
        {menuItems.map((item, index) => (
          <NavItem key={index} icon={item.icon} to={item.path} />
        ))}
      </div>

      <div className="d-flex flex-column gap-1 w-100 mt-auto">
        <div
          onClick={() => setIsDarkMode(!isDarkMode)}
          style={{ cursor: "pointer" }}
        >
          <NavItem
            icon={isDarkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}
            to="/change"
            isActive={false}
          />
        </div>
        <div onClick={handleLogout} style={{ cursor: "pointer" }}>
          <NavItem
            icon="fa-solid fa-right-from-bracket"
            to="/logout"
            isActive={false}
          />
        </div>
      </div>
    </div>
  );
}
