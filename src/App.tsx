// import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router';
import './App.scss'
import { Header } from './components/layout/Header'
import { Contents } from './components/layout/Contents'
import { Footer } from './components/layout/Footer'

function App() {

  return (
    // <BrowserRouter>
      <div className="app-container">
        <Header title="React 19" />
        <Contents />
        <Footer />
      </div>
    // </BrowserRouter>
  )
}

export default App
