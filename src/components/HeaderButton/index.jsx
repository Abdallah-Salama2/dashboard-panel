import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderButton({ label, icon, className }) {
  return (
    <button
      className={` rounded-pill shadow-sm px-3 py-2 border d-flex bg-transparent text-muted justify-content-between  align-items-center  ${className}`}
      style={{ height: "46px", maxWidth: "250px" }}
    >
      <p className="fw-bold mb-0">{label}</p>
      <FontAwesomeIcon icon={icon} className="" />
    </button>
  );
}
