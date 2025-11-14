import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RedirectoryPage from './pages/RedirectoryPage'
import CreativePortfolioPage from './pages/CreativePortfolioPage'
import ProPortfolioPage from './pages/ProPortfolioPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectoryPage />} />
        <Route path="/creative" element={<CreativePortfolioPage />} />
        <Route path="/pro" element={<ProPortfolioPage />} />
      </Routes>
    </Router>
  )
}

export default App
