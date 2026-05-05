import { useContext } from "react";
import { DashboardContext } from "../../../../context/DashboardContext";

export default function StatsSection() {
  const { stats, loading } = useContext(DashboardContext);

  if (loading) return <p>Loading stats...</p>;

  return (
    <div className="row g-3 mb-4">
      {stats.map((item) => (
        <div className="col-md-4" key={item.id}>
          <div
            className="card p-3 border-0 shadow-sm"
            style={{ borderRadius: "15px" }}
          >
            <p className="text-secondary small mb-1">{item.title}</p>
            <h3 className="fw-bold mb-1">
              {item.value}
              <span className="fs-6 text-secondary fw-normal">
                {item.decimal}
              </span>
            </h3>
            <span
              className={
                item.isPositive ? "text-success small" : "text-danger small"
              }
            >
              {item.isPositive ? "↑" : "↓"} {item.percentage}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
