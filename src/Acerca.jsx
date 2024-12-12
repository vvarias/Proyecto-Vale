import React from "react";
import "./Acerca.css";

const Acerca = () => {
  return (
    <div className="acerca-container">
      <h1>Acerca de nosotros</h1>
      <p className="acerca-descripcion">
        En el Museo Nova, celebramos el poder transformador del arte y la
        creatividad. Somos un espacio donde convergen la historia, la innovación
        y la imaginación.
      </p>
      <div className="acerca-content">
        <div className="acerca-texto">
          <p>
            Ofrecemos a nuestros visitantes experiencias que inspiran, educan y
            conectan. Nuestro compromiso es abrir puertas al mundo del arte
            mediante exposiciones cautivadoras, eventos únicos y actividades
            que despiertan la curiosidad.
          </p>
          <p>
            Ya sea que explores nuestras galerías, asistas a un taller o
disfrutes de una velada temática, en Nova encontrarás un lugar para reflexionar,
            aprender y soñar.
          </p>
        </div>
        <img
          src="https://www.spain.info/.content/imagenes/cabeceras-grandes/madrid/sp-galeria-central-0-museo-nacional-del-prado.jpg"
          alt="Interior del Museo Nova"
          className="acerca-imagen"
        />
      </div>
    </div>
  );
};

export default Acerca;