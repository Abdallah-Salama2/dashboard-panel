import "react";
import CapsuleButton from "./components/CapsuleButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImg from "../../assets/logo.png";
import profile from "../../assets/profile.jpg";
export default function NavBar() {
  return (
    <div className="col-12 p-3  d-flex justify-content-between align-items-center">
      {/* Logo */}
      <div className="logo">
        <img src={logoImg} alt="logo" style={{ height: "35px" }} />
      </div>

      {/* Icons and Profile */}
      <div className=" d-flex gap-4">
        {/* language selector */}
        <CapsuleButton className={"d-none d-sm-block p"}>
          <span
            className="fw-bold me-1"
            style={{ fontSize: "15px", color: "#2B3674" }}
          >
            EN
          </span>
          <FontAwesomeIcon
            icon="fa-solid fa-chevron-down"
            style={{ fontSize: "13px" }}
          />
        </CapsuleButton>
        {/* Fullscreen Icon */}
        <CapsuleButton className={"d-none d-sm-block"}>
          <FontAwesomeIcon
            icon="fa-solid fa-expand"
            className="text-secondary "
          />
        </CapsuleButton>

        {/* chat Icon */}
        <CapsuleButton>
          <FontAwesomeIcon
            icon="fa-regular fa-comment"
            className="text-secondary"
          />
        </CapsuleButton>

        {/* notifications Icon */}
        <CapsuleButton>
          <FontAwesomeIcon
            icon="fa-regular fa-bell"
            className="text-secondary"
          />
        </CapsuleButton>

        {/* Profile */}
        <div className="ms-1 border rounded-circle p-0">
          <img
            // src="https://i.pravatar.cc/150?u=fake@pravatar.com"
            src={profile}
            alt="profile"
            className="rounded-circle"
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
              border: "2px solid #fff",
            }}
          />
        </div>
      </div>
    </div>
  );
}
