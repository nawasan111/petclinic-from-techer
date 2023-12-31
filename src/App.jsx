import "./App.css";
import Home from "./components/Home";
import PetList from "./components/PetList";
import Pet from "./components/Pet";
import OwnerList from "./components/OwnerList";
import { Route, Routes, Link } from "react-router-dom";
import { TbDogBowl, TbHome, TbIdBadge2, TbUser } from "react-icons/tb";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <TbDogBowl
              style={{
                color: "#FFFFFF",
                fontSize: 30,
                marginRight: 5,
                paddingBottom: 5,
              }}
            />
            <b>Pet Clinic</b>
          </Link>
        </div>
      </nav>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          minHeight: "75rem",
          paddingTop: "4.5rem",
        }}
      >
        <div
          className="d-flex flex-column flex-shrink-0 p-3 bg-light"
          style={{ width: 230 }}
        >
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <span className="fs-4">
              <TbDogBowl
                style={{
                  color: "#000000",
                  fontSize: 30,
                  marginRight: 5,
                  paddingBottom: 5,
                }}
              />
              <b>Pet Clinic</b>
            </span>
          </Link>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item" style={{ marginBottom: 5 }}>
              <Link to="/" className="nav-link link-dark" aria-current="page">
                <TbHome
                  style={{ fontSize: 30, marginRight: 5, paddingBottom: 5 }}
                />
                <b>หน้าแรก</b>
              </Link>
            </li>
            <li>
              <Link
                to="/pets"
                className="nav-link link-dark"
                aria-current="page"
              >
                <TbIdBadge2
                  style={{ fontSize: 30, marginRight: 5, paddingBottom: 5 }}
                />
                <b>รายชื่อสัตว์</b>
              </Link>
            </li>
            <li>
              <Link
                to="/owners"
                className="nav-link link-dark"
                aria-current="page"
              >
                <TbUser
                  style={{ fontSize: 30, marginRight: 5, paddingBottom: 5 }}
                />
                <b>รายชื่อเจ้าของ</b>
              </Link>
            </li>
          </ul>
        </div>
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<PetList />} />
            <Route path="/pet/view/:id" element={<Pet />} />
            <Route path="/owners" element={<OwnerList />} />
          </Routes>
        </main>
      </div>
      <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Footer
          </a>
        </div>
      </nav>
    </>
  );
}

export default App;
