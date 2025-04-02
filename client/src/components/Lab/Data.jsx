import { useLocation, Link } from "react-router-dom";

const Data = (props) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);

  return (
    <>
      <h1 className="text-center text-2xl">Detail Data</h1>
      {state && (
        <div>
          <p>Nama Point of Interest : {state.nama}</p>
          <p>
            Deskripsi :{" "}
            {state.deskripsi == null || state.deskripsi == ""
              ? "tidak ada deskripsi"
              : state.deskripsi}
          </p>
        </div>
      )}
      <hr />
      <Link to="/gabung">Go Home</Link>
    </>
  );
};

export default Data;
