import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Basics from './components/Basics'
import Safety from './components/Safety'
import Guides from './components/Guides'
import Prices from './components/Prices'
import Glossary from './components/Glossary'
import Quiz from './components/Quiz'
import Footer from './components/Footer'
import InstallPrompt from './components/InstallPrompt'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex flex-col">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/basics" element={<Basics />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<Hero />} />
        </Routes>
      </main>
      <Footer />
      <InstallPrompt />
    </div>
  )
}

export default App
