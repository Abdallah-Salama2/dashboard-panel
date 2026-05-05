import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../NavItem/styles.css";
export default function NavItem({ icon, to }) {
  return (
    <NavLink
      to={to}
      end
      className="d-flex align-items-center justify-content-center w-100 text-decoration-none"
      style={{ height: "70px" }}
    >
      {({ isActive }) => (
        <div
          className={`d-flex align-items-center justify-content-center rounded-circle transition-all nav-icon-box ${
            isActive ? "active-icon" : ""
          }`}
          style={{
            width: "48px",
            height: "48px",
          }}
        >
          <FontAwesomeIcon icon={icon} style={{ fontSize: "20px" }} />
        </div>
      )}
    </NavLink>
  );
}
