import ProductTable from "../../../../components/ProductsTable";
import ConversionRateCard from "../../../../components/ConverstionRateCard";
export default function ProductsSection() {
  return (
    <div
      className="row g-4 mt-4 shadow-sm rounded-4 p-4 "
      style={{ backgroundColor: "#F2F7FA" }}
    >
      <div className="col-12">
        <h3 className="fw-bold mb-3">Product List</h3>
      </div>

      <div className="col-12 col-xl-9">
        <ProductTable />
      </div>

      <div className="col-12 col-xl-3">
        <ConversionRateCard />
      </div>
    </div>
  );
}
