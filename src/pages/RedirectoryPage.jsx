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
        {/* Le contenu viendra ici */}
      </main>
    </div>
  )
}

export default RedirectoryPage
