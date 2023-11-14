import { useState } from "react";
import { NavLink } from "react-router-dom";

const Busqueda = () => {
  const [nombre, setNombre] = useState("");
  return (
    <>
      <div className="d-flex align-items-center mt-5">
        <div className="row d-flex grid col-12 gap-4 g-col-12 justify-content-center">
          <div className="d-flex justify-content-center col-6 grid gap-2 g-col-6">
            <img
              src="https://cdn.icon-icons.com/icons2/2070/PNG/512/purse_icon_125818.png"
              alt="Bazar Online"
              width="80"
            />
            <h1>Bazar Online</h1>
          </div>
          <div className="form d-flex col-6 grid gap-2 g-col-6">
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre"
              name="Nombre"
              id="Nombre"
              required
            />
            <NavLink to={`/items/${nombre}`}>
              <button className="btn btn-success">
                <i className="bi bi-search"></i>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Busqueda;
