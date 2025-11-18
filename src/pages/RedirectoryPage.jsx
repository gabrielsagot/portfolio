import { Link } from 'react-router-dom'
import FloatingLines from '../components/FloatingLines'
import './RedirectoryPage.css'

function RedirectoryPage() {
  return (
    <div className="redirectory-page">
      {/* Background animé FloatingLines */}
      <div className="floating-lines-background">
        <FloatingLines />
      </div>

      {/* Contenu principal */}
      <main className="redirectory-content">
        <div className="main-container">
          {/* Header avec nom */}
          <header className="hero-section">
            <div className="name-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">Disponible pour de nouveaux projets</span>
            </div>
            <h1 className="hero-name">Gabriel Sagot</h1>
            <p className="hero-title">Développeur & Designer</p>
          </header>

          {/* Section principale avec les cartes */}
          <section className="portfolio-section">
            <div className="section-header">
              <h2 className="section-title">Choisissez votre expérience</h2>
              <p className="section-subtitle">Découvrez mes projets à travers deux univers distincts</p>
            </div>

            <div className="cards-grid">
              <Link to="/creative" className="portfolio-card creative-card">
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 className="card-title">Créatif</h3>
                  <p className="card-description">Projets artistiques & expérimentaux</p>
                  <div className="card-arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </Link>

              <Link to="/pro" className="portfolio-card pro-card">
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <path d="M9 3v18M9 9h6M9 15h6"/>
                    </svg>
                  </div>
                  <h3 className="card-title">Professionnel</h3>
                  <p className="card-description">Expérience & compétences techniques</p>
                  <div className="card-arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default RedirectoryPage
