import { Link } from 'react-router-dom'
import './RedirectoryPage.css'

function RedirectoryPage() {
  return (
    <div className="redirectory-page">
      <div className="container">
        <header className="header">
          <h1>Bienvenue sur mon Portfolio</h1>
          <p className="subtitle">Choisissez l'expérience qui vous correspond</p>
        </header>

        <div className="choices">
          <Link to="/creative" className="choice-card creative">
            <div className="card-content">
              <h2>Portfolio Créatif</h2>
              <p>
                Découvrez mon univers artistique et mes projets expérimentaux.
                Design, interactions originales et projets personnels.
              </p>
              <span className="cta">Explorer →</span>
            </div>
          </Link>

          <Link to="/pro" className="choice-card professional">
            <div className="card-content">
              <h2>Portfolio Professionnel</h2>
              <p>
                Consultez mon expérience professionnelle, mes compétences
                techniques et mes projets académiques.
              </p>
              <span className="cta">Consulter →</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RedirectoryPage
