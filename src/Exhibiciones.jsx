import React from 'react';
import './Exhibiciones.css';

const Exhibiciones = () => {
  const exhibiciones = [
    {
      titulo: "Atardecer sobre las Colinas",
      fecha: "10/12/2024 a 14/01/2025",
      img: "https://galeriasalamarte.com/cdn/shop/collections/acuarela_editada.jpg?v=1722555010",
    },
    {
      titulo: "La Noche Estrellada (Vincent van Gogh)",
      fecha: "10/12/2024 a 14/01/2025",
      img: "https://www.esdesignbarcelona.com/sites/default/files/inline-images/Depositphotos_540183726_S.jpg",
    },
    {
      titulo: "Composición VIII (Vasili Kandinsky)",
      fecha: "10/12/2024 a 14/01/2025",
      img: "https://content.arquitecturaydiseno.es/medio/2024/10/31/amarillo-rojo-y-azul-de-vasili-kandinski-1925_b858c12b_241031154920_1280x794.webp",
    },
    {
      titulo: "La Gran Ola de Kanagawa (Katsushika Hokusai)",
      fecha: "10/12/2024 a 14/01/2025",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Great_Wave_off_Kanagawa2.jpg/1200px-Great_Wave_off_Kanagawa2.jpg",
    },
    {
      titulo: "Los Amantes (René Magritte)",
      fecha: "10/12/2024 a 14/01/2025",
      img: "https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/FZUVCFZ7Y5COBKPBBCFRHSRSMY.jpg",
    },
    {
      titulo: "Venecia, Puente de los Sueños (Leonid Afremov)",
      fecha: "10/12/2024 a 14/01/2025",
      img: "https://afremov.com/media/catalog/product/l/e/leonid-afremov-originals_qsigwczf9a5pfpuj.jpeg",
    },
    {
      titulo: "La Escuela de Atenas (Rafael)",
      fecha: "10/12/2024 a 14/01/2025",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/La_scuola_di_Atene.jpg/1200px-La_scuola_di_Atene.jpg",
    },
    {
      titulo: "Las Meninas (Diego Velasquez)",
      fecha: "10/12/2024 a 14/01/2025",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Meninas_Corona_Borealis.jpg/250px-Meninas_Corona_Borealis.jpg",
    },
  ];

  return (
    <div className="exhibiciones-container">
      <h1>Exhibiciones</h1>
      <p className="exhibiciones-descripcion">
        Descubre nuestras exhibiciones, donde el arte, la historia y la innovación se unen para inspirar y sorprender.
      </p>
      <div className="exhibiciones-grid">
        {exhibiciones.map((exhibicion, index) => (
          <div className="exhibicion-card" key={index}>
            <img src={exhibicion.img} alt={exhibicion.titulo} className="exhibicion-imagen" />
            <h3>{exhibicion.titulo}</h3>
            <p>{`Fecha de exposición: ${exhibicion.fecha}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exhibiciones;