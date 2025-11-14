import { Link } from 'react-router-dom'
import './ProPortfolioPage.css'

function ProPortfolioPage() {
  return (
    <div className="pro-portfolio-page">
      <div className="container">
        <Link to="/" className="back-link">← Retour</Link>
        <h1>Portfolio Professionnel</h1>
        <p>Cette page sera développée prochainement...</p>
      </div>
    </div>
  )
}

export default ProPortfolioPage
