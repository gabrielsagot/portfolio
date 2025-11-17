import FloatingLines from '../components/FloatingLines'
import './RedirectoryPage.css'

function RedirectoryPage() {
  return (
    <div className="redirectory-page">
      {/* Background animé FloatingLines */}
      <div className="floating-lines-background">
        <FloatingLines
          linesGradient={['#0d1117', '#1a1f2e', '#1e2a3a', '#2d3e50']}
          lineCount={5}
          lineDistance={8}
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
