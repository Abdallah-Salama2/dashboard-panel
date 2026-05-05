import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const rateItems = [
  { label: "Product Views", value: "6,575", sub: "29%" },
  { label: "Add to Cart", value: "6,575", sub: "29%" },
  { label: "Checkout Initiated", value: "6,575", sub: "29%" },
  { label: "Completed Purchases", value: "6,575", sub: "29%" },
];

export default function ConversionRateCard() {
  return (
    <div className="card border-0 shadow-sm rounded-5 p-4 bg-white h-100">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold mb-0">Conversion Rate</h5>
        <small className="text-muted">
          Last Year <FontAwesomeIcon icon="fa-solid fa-calendar" />
        </small>
      </div>

      <div className="bg-light rounded-4 p-2 d-flex justify-content-between align-items-center mb-4">
        <button className="btn btn-sm btn-light shadow-sm rounded-3 px-3 fw-bold">
          January 2025
        </button>
        <FontAwesomeIcon
          icon="fa-solid fa-chevron-right"
          className="text-muted small px-2"
        />
      </div>

      <div className="d-flex flex-column gap-4">
        {rateItems.map((item, i) => (
          <div
            key={i}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <div className="fw-bold small">{item.label}</div>
              <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                {item.sub}
              </div>
            </div>
            <div className="fw-bold">{item.value}</div>
          </div>
        ))}
      </div>

      <button className="btn btn-link text-dark text-decoration-none fw-bold mt-auto pt-4 text-center">
        Learn More{" "}
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="ms-1" />
      </button>
    </div>
  );
}
