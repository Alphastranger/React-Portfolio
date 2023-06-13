import logo from './logo.svg';
import Header from './components/Header'
import AboutMe from './components/About-Me'
import Footer from './components/Footer'
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      
                    <Routes>
                    
                        <Route path='/' component={AboutMe}></Route>
                    
                        <Route path='/contact' element={Contact}></Route>
                    
                        <Route path='/portfolio' element={Portfolio}></Route>
                    
                        <Route path='/resume' element={Resume}></Route>
                </Routes>
                
      <AboutMe/>
      <Footer/>
    </div>
  )
}

export default App;
