import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.scss'
// common
import Header from './components/Header'
import Footer from './components/Footer'
// pages
import Home from './pages/Home';
import About from './pages/About';
import HomeLayout from './layouts/HomeLayout';
import ExHover from './pages/sub/ExHover';
import ExUseState from './pages/sub/ExUseState';
import ExUseEffect from './pages/sub/ExUseEffect';
import ExUseRef from './pages/sub/ExUseRef';
import ExContext from './pages/sub/ExContext';

function App() {

  return (
    <HashRouter>
      <div className="app-container">
        <Header title="React 19" />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/ExHover" element={<ExHover />} />
              <Route path="/ExUseState" element={<ExUseState />} />
              <Route path="/ExUseEffect" element={<ExUseEffect />} />
              <Route path="/ExUseRef" element={<ExUseRef />} />
              <Route path="/ExContext" element={<ExContext />} />
            </Route>
          </Routes>
          <Route path="/about" element={<About />} />
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
