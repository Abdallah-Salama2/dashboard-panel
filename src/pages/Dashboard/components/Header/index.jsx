import HeaderButton from "../../../../components/HeaderButton";
import SearchBar from "../../../../components/SearchBar";

export default function Header() {
  return (
    <div className="row g-0 py-4 align-items-center gap-md-4 gap-lg-0  ">
      {/* Welcome User */}
      <div className="col-12 col-lg-5 text-center text-lg-start ">
        <h2 className="fw-bold fs-3 text-black">Welcome Back Ameerah Howard</h2>
        <p className="m-0 fs-6 fw-bold">
          You have <span className="text-primary">2 unread</span> notifications
        </p>
      </div>
      {/* Tools and search bar */}
      <div className="col-12 col-lg-7 ">
        <div className="row g-0 gap-2 justify-content-center justify-content-xl-end gap-2 flex-lg-nowrap overflow-hidden ">
          {/* search bar */}
          <SearchBar className={"col col-sm-6 col-lg-auto "} />
          {/* Buttons */}
          <HeaderButton
            label="Date"
            icon="fa-solid fa-calendar-days"
            className={"col col-sm-6 col-lg-auto gap-4 "}
          />
          <HeaderButton
            label="Export Document"
            icon="fa-solid fa-file-export"
            className={"col col-sm-6 col-lg-auto  gap-4"}
          />
          <HeaderButton
            icon="fa-solid fa-sliders"
            className={"col col-sm-6 col-lg-auto"}
          />
        </div>
      </div>
    </div>
  );
}
