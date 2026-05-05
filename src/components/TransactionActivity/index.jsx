import { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DashboardContext } from "../../context/DashboardContext";

const yTicks = [0, 100, 200, 300, 400, 500, 600];

export default function TransactionActivity() {
  const { transactionActivity, loading } = useContext(DashboardContext);
  return (
    <div style={{ width: "100%", height: 200, margin: "0 auto" }}>
      {" "}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={transactionActivity}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }} // الـ left بالسالب بيشيل الفراغ اللي قبل الـ YAxis
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f0f0f0"
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            padding={{ left: 10, right: 10 }} // بيلم الخطوط من الأطراف
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            ticks={yTicks}
            domain={[0, 600]}
          />

          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "none",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
          />

          <Line
            type="monotone"
            dataKey="total"
            stroke="#4992EB"
            strokeWidth={3} // 4 كان سميك شوية، 3 أقرب للصورة
            dot={false}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />

          <Line
            type="monotone"
            dataKey="success"
            stroke="#0e0c0c"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
