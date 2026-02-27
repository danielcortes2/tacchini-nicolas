import { useState, useEffect, useRef } from 'react';

function About() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counters, setCounters] = useState({ years: 0, projects: 0, clients: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounters();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { years: 24, projects: 500, clients: 100 };
    const duration = 2000;
    const increment = (target) => target / (duration / 16);

    let currentValues = { years: 0, projects: 0, clients: 0 };

    const animate = () => {
      let allDone = true;

      Object.keys(targets).forEach(key => {
        if (currentValues[key] < targets[key]) {
          currentValues[key] += increment(targets[key]);
          if (currentValues[key] > targets[key]) {
            currentValues[key] = targets[key];
          }
          allDone = false;
        }
      });

      setCounters({
        years: Math.floor(currentValues.years),
        projects: Math.floor(currentValues.projects),
        clients: Math.floor(currentValues.clients)
      });

      if (!allDone) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Notre Histoire</h2>
            <div className="title-underline"></div>
            <p className="lead">Une tradition familiale d&apos;excellence artisanale</p>
            <p>Fondée par André Tacchini, la menuiserie a été reprise par Nicolas Tacchini en 2000. Propriétaire, patron et menuisier maîtrisé, Nicolas et son équipe se font un plaisir de vous rencontrer pour vous conseiller dans tous vos besoins de rénovation ou de construction.</p>
            <p>Avec plus de deux décennies d&apos;expérience, nous combinons savoir-faire traditionnel et techniques modernes pour offrir des prestations de qualité supérieure.</p>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">{counters.years}+</span>
                <span className="stat-label">Ans d&apos;expérience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{counters.projects}+</span>
                <span className="stat-label">Projets réalisés</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{counters.clients}+</span>
                <span className="stat-label">Clients satisfaits</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=800&fit=crop" alt="Atelier de menuiserie" />
            <div className="image-overlay">
              <i className="fas fa-tools"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
