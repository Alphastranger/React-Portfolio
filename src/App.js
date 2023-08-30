import logo from './logo.svg';
import Header from './components/Header'
import AboutMe from './components/About-Me'
import Footer from './components/Footer'
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Nav from './components/Nav';
import Main from './components/Main-Page';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path ='/React-Portfolio' Component={AboutMe}></Route>
        <Route path='/About-Me' Component={AboutMe}></Route>

        <Route path='/contact' Component={Contact}></Route>

        <Route path='/portfolio' Component={Portfolio}></Route>

        <Route path='/resume' Component={Resume}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
