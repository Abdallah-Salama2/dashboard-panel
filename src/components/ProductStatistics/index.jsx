import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DashboardContext } from "../../context/DashboardContext";

export default function ProductStatistics() {
  const { productsStatistics } = useContext(DashboardContext);

  return (
    <div style={{ width: "100%", height: 200, margin: "0 auto" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={productsStatistics}
          margin={{ top: 20, right: 0, left: -25, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#c0bbbb3d"
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            padding={{ left: 40, right: 10 }} // بيلم الخطوط من الأطراف
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            domain={[0, 600]}
            ticks={[0, 100, 200, 300, 400, 500, 600]}
          />

          <Tooltip cursor={{ fill: "transparent" }} />

          {/* الجزء اللي تحت - الأزرق الغامق */}
          <Bar dataKey="actual" stackId="a" fill="#4992EB" barSize={25} />

          {/* الجزء اللي فوق - الأزرق الفاتح جداً */}
          <Bar
            dataKey="remain"
            stackId="a"
            fill="#E2EFFF" // لون فاتح أوي عشان يبان كأنه خلفية للعمود
            radius={[5, 5, 0, 0]} // الدوران من فوق خالص بس
            barSize={25}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
