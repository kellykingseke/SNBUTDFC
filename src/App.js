import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import NewsDetails from './components/NewsDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Termsconditions from './components/Termsconditions';
import Allplayers from './components/Allplayers';
import News from './components/News';
import Schedule from './components/Schedule';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/allplayers" element={<Allplayers />} />
          <Route path="/terms&conditions" element={<Termsconditions />} />
          <Route path='/news' element={<News />} />
          <Route path='/schedule' element={<Schedule/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
