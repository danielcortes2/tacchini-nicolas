function Hero() {
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
    <section id="accueil" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title animate-fade-in">
          <span className="title-small">Bienvenue chez</span>
          <span className="title-large">Tacchini Nicolas</span>
          <span className="title-subtitle">Menuiserie d&apos;Excellence</span>
        </h1>
        <p className="hero-description animate-fade-in-delay">
          Artisan menuisier depuis 2000, nous transformons vos projets en réalisations exceptionnelles
        </p>
        <div className="hero-buttons animate-fade-in-delay-2">
          <a href="#services" className="btn btn-primary" onClick={(e) => scrollToSection(e, '#services')}>Découvrir nos services</a>
          <a href="#contact" className="btn btn-secondary" onClick={(e) => scrollToSection(e, '#contact')}>Obtenir un devis</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
}

export default Hero;
