import { Link } from 'react-router-dom'
import './CreativePortfolioPage.css'

function CreativePortfolioPage() {
  return (
    <div className="creative-portfolio-page">
      <div className="container">
        <Link to="/" className="back-link">← Retour</Link>
        <h1>Portfolio Créatif</h1>
        <p>Cette page sera développée prochainement...</p>
      </div>
    </div>
  )
}

export default CreativePortfolioPage
