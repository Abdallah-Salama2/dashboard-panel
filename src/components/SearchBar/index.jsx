import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommandIcon from "../../assets/command-icon.png"; // تأكد من المسار واسم الملف

export default function SearchBar({ className }) {
  return (
    <div
      className={`rounded-pill d-flex align-items-center bg-transparent px-3 py-1 shadow-sm border flex-shrink-1 ${className}`}
      style={{ minWidth: "150px", maxWidth: "250px" }}
    >
      <FontAwesomeIcon icon="fa-solid fa-search" className="text-secondary" />

      <input
        type="text"
        placeholder="Search..."
        className="border-0 bg-transparent form-control shadow-none outline-none"
      />
      <button className="border-0 bg-transparent d-flex align-items-center justify-content-center shadow-none outline-none">
        <img
          src={CommandIcon}
          alt="Command"
          style={{ width: "55px", height: "auto" }}
        />
      </button>
    </div>
  );
}
