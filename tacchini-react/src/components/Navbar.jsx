import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

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
    handleLinkClick();
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <i className="fas fa-hammer"></i>
          <span>Tacchini Nicolas</span>
        </a>
        <button 
          className={`nav-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#accueil" className="nav-link" onClick={(e) => scrollToSection(e, '#accueil')}>Accueil</a></li>
          <li><a href="#services" className="nav-link" onClick={(e) => scrollToSection(e, '#services')}>Services</a></li>
          <li><a href="#realisations" className="nav-link" onClick={(e) => scrollToSection(e, '#realisations')}>Réalisations</a></li>
          <li><a href="#equipe" className="nav-link" onClick={(e) => scrollToSection(e, '#equipe')}>L'Équipe</a></li>
          <li><a href="#contact" className="nav-link btn-contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
