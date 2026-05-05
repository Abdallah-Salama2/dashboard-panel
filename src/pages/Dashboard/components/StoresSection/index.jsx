import { useContext } from "react";
import StoreCard from "../../../../components/StoreCard";
import { DashboardContext } from "../../../../context/DashboardContext";

export default function StoresSection() {
  const { stores, loading } = useContext(DashboardContext);

  return (
    <div className="row g-4 mt-4">
      {stores.map((store, index) => (
        <div key={index} className="col-12 col-md-6 col-lg-3">
          <StoreCard {...store} />
        </div>
      ))}
    </div>
  );
}
