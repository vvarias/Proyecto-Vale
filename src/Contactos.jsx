import React from "react";
import "./Contactos.css";

const Contactos = () => {
  return (
    <div className="contactos-container">
      <h1 className="contactos-title">Contactos</h1>
      <p className="contactos-subtitle">Contáctanos aquí</p>
      <div className="contactos-content">
        <div className="contactos-info">
          <p className="contacto-item">
            <i className="fas fa-phone"></i> Teléfono: +591 65327817
          </p>
          <p className="contacto-item">
            <i className="fas fa-envelope"></i> Email: museoNova@gmail.com
          </p>
          <p className="contacto-item">
            <i className="fas fa-map-marker-alt"></i> Dirección: Calle Francisco Bedregal
          </p>
        </div>
        <div className="contactos-image-container">
          <img src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/3c/3c0c/3c0ce8cd-6bf9-15e1-9978-56631cda9d7a/6e227a97-a607-d493-583e-cb3940761375.jpg" alt="Museo Nova" className="contactos-image" />
        </div>
      </div>
    </div>
  );
};

export default Contactos;