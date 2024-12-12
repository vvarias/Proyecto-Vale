import React from "react";
import "./styles.css";

function Inicio() {
  return (
    <div className="inicio-container">
      <div className="inicio-content">
        <img
          src="https://rialta.org/wp-content/uploads/2022/08/Louvre.jpg"
          alt="Interior del Museo Nova"
          className="inicio-imagen"
        />
        <div className="inicio-texto">
          <h1>Museo Nova</h1>
          <p>
            Bienvenidos al Museo Nova, donde el arte, la historia y la innovación
            se unen para inspirar y sorprender. Explora exposiciones que despiertan
            tu curiosidad y conectan con la creatividad humana.
          </p>
          <p>
            Nova, el museo donde las ideas brillan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Inicio;