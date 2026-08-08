import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.scss'
import { Header } from './components/layout/Header'
// import { Contents } from './components/layout/Contents'
import { Footer } from './components/layout/Footer'
import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <HashRouter>
      <div className="app-container">
        <Header title="React 19" />        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
