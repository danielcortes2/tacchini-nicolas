function Team() {
  const teamMembers = [
    {
      name: 'Nicolas Tacchini',
      role: 'Patron & Menuisier Maître',
      description: 'Menuisier passionné depuis plus de 24 ans, spécialiste des projets sur mesure et de la rénovation patrimoniale.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop'
    },
    {
      name: 'Équipe Atelier',
      role: 'Artisans Menuisiers',
      description: 'Une équipe qualifiée et dévouée pour la réalisation de tous vos projets de menuiserie.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Service Commercial',
      role: 'Conseil & Devis',
      description: 'À votre écoute pour étudier vos besoins et vous proposer les meilleures solutions.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
    }
  ];

  return (
    <section id="equipe" className="team-section">
      <div className="container">
        <h2 className="section-title">Notre Équipe</h2>
        <div className="title-underline center"></div>
        <p className="section-subtitle">Des artisans passionnés à votre service</p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-overlay">
                  <div className="social-links">
                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    <a href="#" aria-label="Email"><i className="fas fa-envelope"></i></a>
                  </div>
                </div>
              </div>
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-desc">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
