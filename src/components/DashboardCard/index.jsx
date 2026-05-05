import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardCard = ({ title, children }) => {
  return (
    <div className="card rounded-5 py-4 h-100 shadow-sm border-0">
      <div className="d-flex justify-content-between align-items-center mb-5 border-bottom pb-3 px-4">
        <h5 className="mb-0">{title}</h5>

        <div className="d-none d-lg-flex align-items-center gap-3">
          <p
            className="mb-0 text-muted d-flex align-items-center gap-2"
            style={{ fontSize: "0.9rem" }}
          >
            Last Year
            <FontAwesomeIcon icon="fa-solid fa-calendar" />
          </p>
        </div>
      </div>
      <div className="px-4 h-100">{children}</div>
    </div>
  );
};

export default DashboardCard;
