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

      {/* Contenu principal (au-dessus du background) */}
      <main className="redirectory-content">
        <div className="glass-container">
          {/* Nom/Prénom */}
          <header className="intro">
            <h1 className="name">Gabriel Sagot</h1>
            <p className="tagline">Développeur & Designer</p>
          </header>

          {/* Section choix */}
          <section className="selection-section">
            <h2 className="selection-title">Choisissez votre expérience</h2>
            <p className="selection-description">
              Découvrez mes projets à travers deux univers distincts
            </p>
          </section>

          {/* Choix des portfolios */}
          <div className="portfolio-choices">
            <Link to="/creative" className="glass-card">
              <h2>Créatif</h2>
              <p>Projets artistiques & expérimentaux</p>
            </Link>

            <Link to="/pro" className="glass-card">
              <h2>Professionnel</h2>
              <p>Expérience & compétences techniques</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default RedirectoryPage
