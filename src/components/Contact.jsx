import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.name || !formData.email || !formData.message) {
      showNotification('Veuillez remplir tous les champs obligatoires', 'error');
      return;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showNotification('Veuillez entrer un email valide', 'error');
      return;
    }

    console.log('Form submitted:', formData);
    showNotification('Message envoyé avec succès! Nous vous répondrons dans les plus brefs délais.', 'success');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contactez-nous</h2>
          <div className="title-underline center"></div>
          <p className="section-subtitle">Parlons de votre projet</p>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3>Adresse</h3>
                <p>Route de la Menuiserie 12<br />1234 Région Lémanique<br />Suisse</p>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h3>Téléphone</h3>
                <p><a href="tel:+41000000000">+41 00 000 00 00</a></p>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Email</h3>
                <p><a href="mailto:contact@tacchini-menuiserie.ch">contact@tacchini-menuiserie.ch</a></p>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Horaires</h3>
                <p>Lun - Ven: 7h00 - 18h00<br />Sam: 8h00 - 12h00<br />Dim: Fermé</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service">Service souhaité</label>
                <select 
                  id="service" 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="portes-fenetres">Portes & Fenêtres</option>
                  <option value="parquets">Parquets</option>
                  <option value="escaliers">Escaliers</option>
                  <option value="amenagements">Aménagements</option>
                  <option value="renovation">Rénovation</option>
                  <option value="sur-mesure">Projet Sur Mesure</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                <span>Envoyer le message</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      {notification && (
        <div className={`notification ${notification.type}`}>
          <i className={`fas fa-${notification.type === 'success' ? 'check-circle' : 'exclamation-circle'}`}></i>
          {notification.message}
        </div>
      )}
    </>
  );
}

export default Contact;
