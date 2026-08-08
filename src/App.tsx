import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.scss'
import { Header } from './components/layout/Header'
// import { Contents } from './components/layout/Contents'
import { Footer } from './components/layout/Footer'
import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
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
    </BrowserRouter>
  )
}

export default App
