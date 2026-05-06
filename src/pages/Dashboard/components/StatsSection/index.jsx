import { useContext } from "react";
import { DashboardContext } from "../../../../context/DashboardContext";
import HighlitedCard from "../Header/components/HighlitedCard";
import StatsCard from "../../../../components/StatsCard";
export default function StatsSection() {
  const { stats, loading } = useContext(DashboardContext);

  if (loading) return <p>Loading stats...</p>;

  return (
    <div className="row g-4 mt-2">
      {/* الكارت الملون */}
      <div className="col-12 col-md-6 col-xl-3">
        <HighlitedCard />
      </div>

      {/* كروت الإحصائيات (Mapping) */}
      {stats.map((item, index) => (
        <div key={index} className="col-12 col-md-6 col-xl-3">
          <StatsCard {...item} />
        </div>
      ))}
    </div>
  );
}
