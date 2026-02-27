function Services() {
  const services = [
    {
      icon: 'fa-door-open',
      title: 'Portes & Fenêtres',
      description: 'Fabrication et pose de portes et fenêtres sur mesure, intérieures et extérieures. Bois massif, PVC ou mixte.',
      features: ['Sur mesure', 'Isolation thermique', 'Design personnalisé']
    },
    {
      icon: 'fa-layer-group',
      title: 'Parquets',
      description: 'Pose de parquets massifs, contrecollés ou stratifiés. Ponçage et rénovation de parquets anciens.',
      features: ['Essences variées', 'Finitions impeccables', 'Rénovation']
    },
    {
      icon: 'fa-stairs',
      title: 'Escaliers',
      description: 'Conception et réalisation d\'escaliers sur mesure. Design classique ou contemporain selon vos envies.',
      features: ['Création sur mesure', 'Tous styles', 'Sécurité garantie']
    },
    {
      icon: 'fa-couch',
      title: 'Aménagements',
      description: 'Création de meubles sur mesure, placards, bibliothèques, dressings. Optimisation de vos espaces.',
      features: ['Espaces optimisés', '100% personnalisé', 'Qualité premium']
    },
    {
      icon: 'fa-home',
      title: 'Rénovation',
      description: 'Rénovation complète ou partielle de votre intérieur. Restauration de boiseries anciennes.',
      features: ['Expertise patrimoniale', 'Rénovation totale', 'Respect du cachet']
    },
    {
      icon: 'fa-ruler-combined',
      title: 'Projet sur Mesure',
      description: 'Un projet spécifique en tête ? Nous étudions et réalisons tous vos projets de menuiserie personnalisés.',
      features: ['Conseil personnalisé', 'Devis gratuit', 'Suivi de A à Z']
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Nos Services</h2>
        <div className="title-underline center"></div>
        <p className="section-subtitle">Des prestations complètes pour tous vos besoins en menuiserie</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
