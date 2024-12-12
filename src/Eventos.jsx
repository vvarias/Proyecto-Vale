import React from "react";
import "./Eventos.css";

const Eventos = () => {
  return (
    <div className="eventos-container">
      <h1>Eventos</h1>
      <p className="eventos-descripcion">
        Descubre los eventos únicos que el Museo Nova tiene preparados para ti.
        Desde talleres creativos y conferencias inspiradoras hasta visitas
        guiadas y presentaciones especiales, siempre hay algo emocionante por
        vivir. ¡No te lo pierdas!
      </p>
      <div className="eventos-grid">
        <div className="evento-destacado">
          <img
            src="https://canalc.com.ar/wp-content/uploads/2024/10/image-1273-1140x855.png"
            alt="Evento destacado"
            className="evento-imagen"
          />
          <h3>Noches en Nova: Arte bajo las estrellas</h3>
          <p>
            Vive una experiencia única con nuestro recorrido nocturno por el
            museo, donde las obras de arte cobran vida bajo una iluminación
            especial que resalta sus detalles más impresionantes.
          </p>
          <p className="evento-fecha">14 Dic 2024</p>
          <p className="evento-tipo">Recorrido nocturno</p>
        </div>
        <div className="eventos-lista">
          <div className="evento-card">
            <img
              src="https://cultura.gov.py/wp-content/uploads/2014/06/DSC_2097-1.jpg"
              alt="El lenguaje del color en el arte moderno"
              className="evento-card-imagen"
            />
            <h4>El lenguaje del color en el arte moderno</h4>
            <p>21 Dic 2024</p>
          </div>
          <div className="evento-card">
            <img
              src="https://elpirineoaragones.com/wp-content/uploads/2024/02/CPEPA-Jacetania-taller-acuarela-1-2024.jpeg"
              alt="Taller de Acuarelas"
              className="evento-card-imagen"
            />
            <h4>Taller de Acuarelas</h4>
            <p>28 Dic 2024</p>
          </div>
          <div className="evento-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwK4nAkL927t7CQNaA-t7uGBI00ZJDeboPFw&s"
              alt="Jazz en el Jardín"
              className="evento-card-imagen"
            />
            <h4>Jazz en el Jardín</h4>
            <p>4 Ene 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventos;