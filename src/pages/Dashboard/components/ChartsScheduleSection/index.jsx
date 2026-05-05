import TransactionActivity from "../../../../components/TransactionActivity";
import SalesPerformance from "../../../../components/SalesPerformance";
import ProductStatistics from "../../../../components/ProductStatistics";
import OrderTime from "../../../../assets/orderTime.png";
import DashboardCard from "../../../../components/DashboardCard";
import ScheduleCard from "../../../../components/ScheduleCard";
export default function ChartsScheduleSection() {
  return (
    <div className="row g-4 mt-4">
      <div className="col-12 col-xl-9">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <DashboardCard title="Transaction Activity">
              <TransactionActivity />
            </DashboardCard>
          </div>

          <div className="col-12 col-md-6">
            <DashboardCard title="Sales Performance">
              <SalesPerformance />
            </DashboardCard>
          </div>

          <div className="col-12 col-md-6">
            <div
              className="card rounded-5 p-4 h-100 shadow-sm border-0 bg-white d-flex align-items-center justify-content-center"
              style={{ minHeight: "280px" }}
            >
              <img
                src={OrderTime}
                alt="Order Time"
                className="img-fluid h-100 object-fit-contain"
              />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <DashboardCard title="Product Statistics">
              <ProductStatistics />
            </DashboardCard>
          </div>
        </div>
      </div>

      {/*Schedule Card */}
      <div className="col-12 col-xl-3">
        <div className="card border-0 shadow-sm rounded-5 p-4 h-100 bg-white">
          <ScheduleCard />
        </div>
      </div>
    </div>
  );
}
