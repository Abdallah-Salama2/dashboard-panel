import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";

export default function ScheduleCard() {
  const { schedule } = useContext(DashboardContext);

  return (
    <div>
      {/* 1. Top Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold mb-0">Schedule</h5>
        <div className="d-flex gap-3 text-muted">
          <button className="btn btn-light rounded-pill btn-sm px-3">
            See All
          </button>
          <FontAwesomeIcon
            icon="fa-solid fa-magnifying-glass"
            className="mt-2"
          />
        </div>
      </div>

      {/* 2. Date Selector */}
      <div className="d-flex justify-content-between align-items-center mb-4 bg-light p-2 rounded-4">
        <FontAwesomeIcon
          icon="fa-solid fa-chevron-left"
          className="text-muted"
        />
        <span className="fw-bold">January 2025</span>
        <FontAwesomeIcon
          icon="fa-solid fa-chevron-right"
          className="text-muted"
        />
      </div>

      {/* 3. Navigation Tabs */}
      <div className="d-flex justify-content-between mb-4 border-bottom pb-2">
        <span
          className="fw-bold text-primary border-bottom border-primary border-3 pb-2"
          style={{ cursor: "pointer" }}
        >
          Meetings
        </span>
        <span className="text-muted" style={{ cursor: "pointer" }}>
          Events
        </span>
        <span className="text-muted" style={{ cursor: "pointer" }}>
          Holiday
        </span>
      </div>

      {/* 4. Meetings List */}
      <div className="d-flex flex-column gap-4">
        {schedule.map((meeting) => (
          <div
            key={meeting.id}
            className="border-start border-4 ps-3"
            style={{ borderColor: meeting.textColor }}
          >
            <div className="d-flex justify-content-between align-items-start mb-1">
              <span
                className="badge rounded-pill"
                style={{
                  backgroundColor: meeting.color,
                  color: meeting.textColor,
                }}
              >
                {meeting.type}
              </span>
              <FontAwesomeIcon
                icon="fa-solid fa-chevron-down"
                className="text-muted small"
              />
            </div>
            <h6 className="fw-bold mb-1">{meeting.title}</h6>
            <p className="text-muted small mb-1">{meeting.time}</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="small text-muted">{meeting.platform}</span>
              {/* هنا ممكن تحط صور بروفايلات صغيرة لو عندك */}
              <div className="profiles-stack">...</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
