import FloatingLines from '../components/FloatingLines'
import './RedirectoryPage.css'

function RedirectoryPage() {
  return (
    <div className="redirectory-page">
      {/* Background animé FloatingLines */}
      <div className="floating-lines-background">
        <FloatingLines
          linesGradient={['#0a1628', '#1e3a5f', '#2c5f8d', '#5ca0d3', '#7cb5e0', '#a3d5ff']}
          lineCount={18}
          interactive={false}
        />
      </div>

      {/* Contenu principal (au-dessus du background) */}
      <main className="redirectory-content">
        {/* Le contenu viendra ici */}
      </main>
    </div>
  )
}

export default RedirectoryPage
