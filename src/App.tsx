import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.scss'
// common
import Header from './components/Header'
import Footer from './components/Footer'
// pages
import Home from './pages/Home';
import About from './pages/About';
import HomeLayout from './layouts/HomeLayout';
import Sub02 from './pages/sub/Sub02';
import Sub05 from './pages/sub/Sub05';
import Sub03 from './pages/sub/Sub03';
import Sub04 from './pages/sub/Sub04';
import Sub01 from './pages/sub/Sub01';
import Comment from './pages/Comment';

function App() {

  return (
    <HashRouter>
      <div className="app-container">
        <Header title="React 19" />
        <main className="main-content">
          <Routes>
            {/* 서브 메뉴가 있는 레이아웃 */}
            <Route path="/" element={<HomeLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/Sub02" element={<Sub02 />} />
              <Route path="/Sub05" element={<Sub05 />} />
              <Route path="/Sub03" element={<Sub03 />} />
              <Route path="/Sub04" element={<Sub04 />} />
              <Route path="/Sub01" element={<Sub01 />} />
            </Route>
            {/* 단독 페이지 */}
            <Route path="/about" element={<About />} />
            <Route path="/Comment" element={<Comment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
