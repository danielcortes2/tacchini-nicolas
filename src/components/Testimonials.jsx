import { useState, useEffect } from 'react';

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: 'Un travail exceptionnel sur notre escalier. Nicolas et son équipe ont su comprendre exactement ce que nous voulions et l\'ont réalisé avec une précision remarquable. Nous recommandons vivement !',
      author: 'Marie Dupont',
      location: 'Genève'
    },
    {
      text: 'Rénovation complète de nos boiseries anciennes. Un savoir-faire artisanal impressionnant, un respect du patrimoine et une qualité de finition irréprochable. Merci !',
      author: 'Jean-Pierre Martin',
      location: 'Lausanne'
    },
    {
      text: 'Pose de parquet dans toute la maison. Travail soigné, délais respectés, équipe professionnelle. Le résultat dépasse nos attentes. Une vraie référence dans la région.',
      author: 'Sophie Bernard',
      location: 'Vevey'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Témoignages</h2>
        <div className="title-underline center"></div>
        <p className="section-subtitle">Ce que nos clients disent de nous</p>
        
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
            >
              <div className="testimonial-stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <strong>{testimonial.author}</strong>
                <span>{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-controls">
          <button className="testimonial-prev" onClick={prevTestimonial} aria-label="Précédent">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="testimonial-next" onClick={nextTestimonial} aria-label="Suivant">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
