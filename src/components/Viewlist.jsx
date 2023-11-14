import { useEffect, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import RatingStars from "./Rating";

const Viewlist = () => {
  const { nombre } = useParams();
  const navigate = useNavigate();

  const [listProductos, setListProductos] = useState([]);
  const [nombreFiltro, setNombreFiltro] = useState(nombre);

  useEffect(() => {
    console.log(nombre);
    searchProducts();
  }, [nombre]);

  const searchProducts = async () => {
    try {
      const response = await axios.get(
        `https://apimocha.com/apiexam2parcial/getProductos`
      );
      const products = response.data.products;
      console.log(products);

      let productosFiltrados = [];

      if (nombreFiltro.trim() !== "") {
        productosFiltrados = products.filter((product) =>
          product.title.toUpperCase().includes(nombreFiltro.toUpperCase())
        );
      } else {
        productosFiltrados = products;
      }

      setListProductos(productosFiltrados);
      navigate(`/items/${nombreFiltro}`);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  const handleSearch = () => {
    searchProducts();
  };

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
              value={nombreFiltro}
              onChange={(e) => setNombreFiltro(e.target.value)}
              placeholder="Nombre"
              name="Nombre"
              id="Nombre"
              required
            />
            <button className="btn btn-success" onClick={handleSearch}>
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
      <center>
        <div className="container-fluid justify-content-center mt-5">
          {listProductos.map((product) => (
            <div className="card col-4 mt-4" key={product.id}>
              <img
                src={product.images[0]}
                alt=""
                width="70"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
              </div>
              <div className="card-body">
                <h5 className="card-text">{product.category}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Precio: ${product.price}</li>
              </ul>
              <div className="card-body d-flex justify-content-between">
                <div className="d-flex justify-content-between align-items-center">
                  <RatingStars rating={product.rating}></RatingStars>
                </div>
                <NavLink to={`/item/${product.id}`}>
                  <button className="btn btn-outline-info">Ver detalle</button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </center>
    </>
  );
};

export default Viewlist;
