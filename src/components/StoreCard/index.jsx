import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const StoreCard = ({ name, performance, activeMembers, avatars }) => {
  return (
    <div className="card border-0 shadow-sm rounded-5 p-4 bg-white h-100">
      {/* Header: Title & See More */}
      <div className="d-flex justify-content-between align-items-start mb-4">
        <h5 className="fw-bold mb-0" style={{ fontSize: "1.2rem" }}>
          {name}
        </h5>
        <button
          className="btn btn-link text-decoration-none text-muted p-0 d-flex align-items-center gap-1"
          style={{ fontSize: "0.85rem" }}
        >
          See More{" "}
          <FontAwesomeIcon
            icon={faChevronRight}
            style={{ fontSize: "0.7rem" }}
          />
        </button>
      </div>

      {/* Content: Stats & Avatars */}
      <div className="d-flex justify-content-between align-items-end">
        <div>
          <p className="mb-1 fw-semibold" style={{ fontSize: "0.9rem" }}>
            Performance Seller -{" "}
            <span className="text-dark">{performance}%</span>
          </p>
          <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
            {activeMembers} Active Members
          </p>
        </div>

        {/* Avatar Stack */}
        <div className="avatar-group d-flex align-items-center bg-light px-2 py-1 rounded-pill">
          {avatars.slice(0, 3).map((src, index) => (
            <img
              key={index}
              src={src}
              alt="member"
              className="rounded-circle border border-white"
              style={{
                width: "30px",
                height: "30px",
                marginLeft: index === 0 ? "0" : "-10px", // التداخل هنا
                objectFit: "cover",
              }}
            />
          ))}
          {activeMembers > 3 && (
            <span
              className="ms-2 fw-bold text-dark"
              style={{ fontSize: "0.85rem" }}
            >
              +{activeMembers - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreCard;
