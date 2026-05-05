import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PercentageBadge({ isPositive, percentage }) {
  return (
    <div
      className="d-flex align-items-center px-2 py-2 rounded-pill mt-3"
      style={{
        backgroundColor: isPositive ? "#E8F4E7" : "#FEECEB",
        color: isPositive ? "#1b7b0d" : "#EE5D50",
        fontSize: "15px",
        padding: "2px 8px",
      }}
    >
      <FontAwesomeIcon
        icon={
          isPositive
            ? "fa-solid fa-arrow-trend-up"
            : "fa-solid fa-arrow-trend-down"
        }
        className="me-1"
      />
      <span className="fw-bold">{percentage}</span>
    </div>
  );
}
