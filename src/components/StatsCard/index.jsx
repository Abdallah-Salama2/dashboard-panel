import PercentageBadge from "../PercentageBadge";

export default function StatsCard({
  title,
  value,
  decimal,
  percentage,
  isPositive,
  date,
}) {
  console.log({
    item: { title, value, decimal, percentage, isPositive, date },
  });
  return (
    <div
      className="card rounded-5 shadow-sm border-0 "
      style={{ minHeight: "200px" }}
    >
      {/* Card Content */}
      <div className="card-body d-flex align-items-start justify-content-between p-3">
        <div>
          <p className="mb-1 text-secondary small fw-bold">{title}</p>
          <h3
            className=" fs-1 mt-3"
            style={{ color: "#000000", fontWeight: 600 }}
          >
            {value}
            <span className="fw-normal" style={{ color: "#A3AED0" }}>
              {decimal}
            </span>
          </h3>
        </div>

        {/* Badge  */}
        <PercentageBadge isPositive={isPositive} percentage={percentage} />
      </div>

      {/* Footer */}
      <div
        className="px-4 py-4  small rounded-5"
        style={{
          backgroundColor: "#F7F9FB",
          color: "#A3AED0",
        }}
      >
        {date}
      </div>
    </div>
  );
}
