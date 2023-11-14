import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import RatingStars from "./Rating";

const DetalleProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producSelected, setProducSelected] = useState({});
  const [imagesProduct, setImagesProduct] = useState([]);

  useEffect(() => {
    searchProduct(id);
  }, [id]);

  const searchProduct = async () => {
    try {
      const response = await axios.get(
        `https://apimocha.com/apiexam2parcial/getProductos`
      );
      const products = response.data.products;
      let producto = products.find((product) => product.id === parseInt(id));

      if (!producto) {
        console.error("Producto no encontrado");
        navigate("/", { replace: true });
        return;
      }

      setProducSelected(producto);
      setImagesProduct(producto.images);
      console.log(producto);
      navigate(`/item/${id}`, { replace: true });
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  return (
    <center>
      <div className="container-fluid">
        <div className="card col-3 mt-4">
          <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {imagesProduct.map((image, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`Slide ${index}`}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="card-body">
            <h5 className="card-title">{producSelected.title}</h5>
            <p className="card-text">{producSelected.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Precio: ${producSelected.price}</li>
          </ul>
          <div className="card-body d-flex justify-content-between">
            <div className="d-flex justify-content-between align-items-center">
              <RatingStars rating={producSelected.rating}></RatingStars>
            </div>
            <button className="btn btn-success">Comprar</button>
          </div>
        </div>
      </div>
    </center>
  );
};

export default DetalleProducto;
