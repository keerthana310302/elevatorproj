import logo from './logo.svg';
import './App.css';
import { Config } from './Config';
import { Contact } from './Contact';
import { Routes, Route,useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <nav className="nav">
      
      </nav>
      {/* <Routes>
              <Route path='/' element= {<Config  />}/>
              {/* <Route path='/movement' element= {<Shaft/>} /> */}
              {/* <Config /> */}
     <Contact />
    </div>
  );
}

export default App;
