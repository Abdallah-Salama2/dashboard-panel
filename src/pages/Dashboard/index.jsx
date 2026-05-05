import Header from "./components/Header";

import StatsSection from "./components/StatsSection";

import ChartsScheduleSection from "./components/ChartsScheduleSection";
import StoresSection from "./components/StoresSection";
import ProductsSection from "./components/ProductsSection";

export default function Dashboard() {
  return (
    <div className="p-4">
      {/* Header */}
      <Header />
      {/* Top Section: Stats */}
      <StatsSection />
      {/* Main Content Section */}
      <ChartsScheduleSection />
      {/* Stores Section */}
      <StoresSection />
      {/* Products Section */}
      <ProductsSection />
    </div>
  );
}
