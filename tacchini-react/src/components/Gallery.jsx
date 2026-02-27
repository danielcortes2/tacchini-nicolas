import { useState } from 'react';

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=600&h=400&fit=crop',
      title: 'Escalier Contemporain',
      description: 'Design épuré en chêne massif'
    },
    {
      src: 'https://images.unsplash.com/photo-1556185781-a47769abb7aa?w=600&h=400&fit=crop',
      title: 'Parquet Point de Hongrie',
      description: 'Chêne massif huilé naturel'
    },
    {
      src: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop',
      title: 'Porte d\'Entrée',
      description: 'Menuiserie traditionnelle'
    },
    {
      src: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=400&fit=crop',
      title: 'Bibliothèque Sur Mesure',
      description: 'Aménagement complet salon'
    },
    {
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      title: 'Cuisine Intégrée',
      description: 'Bois massif et plan de travail'
    },
    {
      src: 'https://images.unsplash.com/photo-1565183997392-2f0f3e8c6d51?w=600&h=400&fit=crop',
      title: 'Fenêtres Triple Vitrage',
      description: 'Performance énergétique A+'
    }
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e) => {
    if (!lightboxOpen) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  };

  useState(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <>
      <section id="realisations" className="gallery-section">
        <div className="container">
          <h2 className="section-title">Nos Réalisations</h2>
          <div className="title-underline center"></div>
          <p className="section-subtitle">Découvrez quelques-unes de nos créations</p>
          
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
                <img src={image.src} alt={image.title} />
                <div className="gallery-overlay">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className={`lightbox-modal ${lightboxOpen ? 'active' : ''}`}>
          <div className="lightbox-overlay" onClick={closeLightbox}></div>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Fermer">
            <i className="fas fa-times"></i>
          </button>
          <button className="lightbox-prev" onClick={prevImage} aria-label="Précédent">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="lightbox-next" onClick={nextImage} aria-label="Suivant">
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="lightbox-content">
            <img src={images[currentImage].src} alt={images[currentImage].title} />
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
