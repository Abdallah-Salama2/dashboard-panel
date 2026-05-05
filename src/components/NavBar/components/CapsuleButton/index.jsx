export default function CapsuleButton({ children, className }) {
  return (
    <div
      className={`rounded-pill  shadow-sm d-flex align-items-center justify-content-center p-2 ${className} border`}
      style={{ minWidth: "40px", height: "40px", cursor: "pointer" }}
    >
      {children}
    </div>
  );
}
