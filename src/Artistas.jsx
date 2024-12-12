import "./Artistas.css";

const Artistas = () => {
  return (
    <div className="artistas-container">
      <h1 className="artistas-title">Artistas</h1>
      <p className="artistas-subtitle">Donde el talento y la visión cobran vida.</p>
      <div className="artistas-grid">
        <div className="artista-card">
          <img src="https://brlab.com.br/wp-content/uploads/2020/10/sofia-marquez-moreno-300x300.jpg" alt="Sofía Márquez" className="artista-image" />
          <h2 className="artista-name">Sofía Márquez</h2>
          <p className="artista-description">
            Pintora contemporánea conocida por paisajes abstractos llenos de color y emoción, que conectan la naturaleza con el ser humano.
          </p>
        </div>
        <div className="artista-card">
          <img src="https://estaticos-cdn.prensaiberica.es/clip/4c9dfce3-5b51-4c74-ba4c-1cda0f9a8e37_source-aspect-ratio_default_0.jpg" alt="Diego Ortega" className="artista-image" />
          <h2 className="artista-name">Diego Ortega</h2>
          <p className="artista-description">
            Escultor que mezcla materiales tradicionales y reciclados para explorar temas de identidad y sostenibilidad.
          </p>
        </div>
        <div className="artista-card">
          <img src="https://overbr.com.br/wp-content/uploads/2024/02/fotografa-466x370.jpg" alt="Isabela Costa" className="artista-image" />
          <h2 className="artista-name">Isabela Costa</h2>
          <p className="artista-description">
            Fotógrafa conceptual que utiliza luz y minimalismo para crear imágenes simbólicas y reflexivas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Artistas;