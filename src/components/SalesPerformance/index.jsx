import { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { DashboardContext } from "../../context/DashboardContext";

export default function SalesPerformance() {
  const { salesPerformance, loading } = useContext(DashboardContext);

  return (
    <div style={{ width: "100%", height: 200, margin: "0 auto" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={salesPerformance}
          margin={{ top: 20, right: 0, left: -25, bottom: 0 }}
          barGap={0}
          barCategoryGap={0}
        >
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4992EB" stopOpacity={1} />
              <stop offset="95%" stopColor="#4992EB" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#645f5f"
          />
          /*خطوط بظهر عمودي بس*/
          <Tooltip cursor={{ fill: "transparent" }} />
          //by5ly el bg shafa lama mouse ygy 3leha
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            padding={{ left: 40, right: 10 }} // بيلم الخطوط من الأطراف
            // scale={customScale}
          />
          <Bar dataKey="sales" fill="url(#colorSales)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
