function Footer() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h3>Tacchini Nicolas Menuiserie</h3>
            <p>Artisan menuisier passionné depuis 2000. Nous mettons notre savoir-faire au service de vos projets les plus exigeants.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Liens Rapides</h3>
            <ul>
              <li><a href="#accueil" onClick={(e) => scrollToSection(e, '#accueil')}>Accueil</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Services</a></li>
              <li><a href="#realisations" onClick={(e) => scrollToSection(e, '#realisations')}>Réalisations</a></li>
              <li><a href="#equipe" onClick={(e) => scrollToSection(e, '#equipe')}>L&apos;Équipe</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Nos Services</h3>
            <ul>
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Portes & Fenêtres</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Parquets</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Escaliers</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Aménagements</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, '#services')}>Rénovation</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li><i className="fas fa-map-marker-alt"></i> Route de la Menuiserie 12, 1234 Suisse</li>
              <li><i className="fas fa-phone"></i> <a href="tel:+41000000000">+41 00 000 00 00</a></li>
              <li><i className="fas fa-envelope"></i> <a href="mailto:contact@tacchini-menuiserie.ch">contact@tacchini-menuiserie.ch</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Tacchini Nicolas Menuiserie. Tous droits réservés.</p>
          <p>Créé avec passion pour l&apos;artisanat d&apos;excellence</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
