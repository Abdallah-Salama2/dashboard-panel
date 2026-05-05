import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PercentageBadge from "../../components/PercentageBadge";
import { useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";

export default function ProductTable() {
  const { products, loading } = useContext(DashboardContext);

  return (
    <div className="card border-0 shadow-sm rounded-5 p-4 bg-white h-100">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-3">
          <h4 className="fw-bold mb-0">
            3280{" "}
            <span className="fw-normal text-muted" style={{ fontSize: "1rem" }}>
              Item
            </span>
          </h4>
          <PercentageBadge isPositive={true} percentage="8.33%" />
        </div>
        <div className="d-flex gap-3">
          <button className="btn btn-light rounded-pill px-3 border">
            See More
          </button>
          <button className="btn btn-light rounded-circle border">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
          <button className="btn btn-light rounded-circle border">
            <FontAwesomeIcon icon="fa-solid fa-arrows-rotate" />
          </button>
        </div>
      </div>

      <div className="input-group mb-4 bg-light rounded-pill px-3 py-1">
        <span className="input-group-text bg-transparent border-0 text-muted">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </span>
        <input
          type="text"
          className="form-control bg-transparent border-0"
          placeholder="Search..."
        />
      </div>

      <div className="table-responsive">
        <table className="table align-middle">
          <thead className="text-muted" style={{ fontSize: "0.85rem" }}>
            <tr>
              <th>
                <input type="checkbox" className="form-check-input" />
              </th>
              <th>Product Name</th>
              <th>Revenue</th>
              <th>Sales</th>
              <th>Reviews</th>
              <th>Views</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "0.9rem" }}>
            {products.map((p) => (
              <tr key={p.id}>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <img src={p.img} className="rounded-3" width="40" alt="" />
                    <div>
                      <div className="fw-bold">{p.name}</div>
                      <div className="text-muted small">{p.status}</div>
                    </div>
                  </div>
                </td>
                <td className="fw-bold">{p.revenue}</td>
                <td>{p.sales}</td>
                <td>{p.reviews}</td>
                <td>{p.views}</td>
                <td>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={p.active}
                      readOnly
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
