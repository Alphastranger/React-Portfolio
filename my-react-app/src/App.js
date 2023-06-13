import logo from './logo.svg';
import Header from './components/Header'
import AboutMe from './components/About-Me'
import Footer from './components/Footer'
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Nav from './components/Nav';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>

        <Route path='/' component={AboutMe}></Route>

        <Route path='/contact' component={Contact}></Route>

        <Route path='/portfolio' component={Portfolio}></Route>

        <Route path='/resume' component={Resume}></Route>
      </Routes>
      <AboutMe />
      <Footer />
    </div>
  )
}

export default App;
