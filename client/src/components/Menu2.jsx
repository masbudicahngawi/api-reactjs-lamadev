import "./Menu2.css";
import { Link } from "react-router-dom";

export default function Menu2() {
  return (
    <>
      <section className="top-nav sticky top-0 z-50">
        <div className="font-bold text-lg">MyPoI</div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/books">Buku-Buku</Link>
          </li>
          <li>
            <Link to="/tambah">Add Buku</Link>
          </li>
          <li>
            <Link to="/gabung">Gabung</Link>
          </li>
        </ul>
      </section>

      {/* <h2>Resize window to collapse menu</h2> */}
    </>
  );
}
