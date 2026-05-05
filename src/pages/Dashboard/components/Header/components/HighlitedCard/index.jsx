import shoeImage from "../../../../../../assets/shoe.png";

export default function HighlitedCard() {
  return (
    <div
      className="card rounded-5 border-0 p-4 position-relative overflow-hidden  shadow-sm"
      style={{
        backgroundColor: "#1884F8",
        minHeight: "200px",
        maxHeight: "200px",
      }}
    >
      <div
        className="card-body p-0 text-white position-relative d-flex flex-column align-items-start  justify-content-between"
        style={{ zIndex: 2 }}
      >
        <h3
          style={{
            maxWidth: "90%", // كبرنا الـ width شوية عشان ندي مساحة للكلام
            fontWeight: 500,
            lineHeight: "1.2",
            fontSize: "calc(1.1rem + 0.5vw)", // دي بتخلي الخط يصغر ويكبر مع الشاشة بسلاسة
            marginBottom: "15px",
          }}
        >
          Sharpen your Skill with Professional Online
        </h3>
        <button className="btn btn-dark rounded-pill px-3 px-sm-4 py-2 fw-bold border-0 shadow ">
          Upgrade Now
        </button>
      </div>

      <img
        src={shoeImage}
        alt="Shoe"
        className="position-absolute"
        style={{
          bottom: "0",
          right: "10px",
          width: "160px",
          zIndex: 1,
        }}
      />
    </div>
  );
}
