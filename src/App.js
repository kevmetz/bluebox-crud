import './App.css';
import HomePage from './HomePage';
import OnePageCrud from './OnePageCrud'
import OnePageCrud2 from './OnePageCrud2'
import OnePageCrud3 from './OnePageCrud3'
import FakePage5 from './FakePage5';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {

  return (
    <div className="app-container">
    <h1 className="app-header">Header</h1>
    <Router>
      <nav>
        <div className="app-nav-box">
      <Link className="app-nav-link" to="/">Home</Link>
      <Link className="app-nav-link" to="onepagecrud">One Page Crud</Link>  
      <Link className="app-nav-link" to="onepagecrud2">One Page Crud2</Link>        
      <Link className="app-nav-link" to="onepagecrud3">One Page Crud3</Link>            
      <Link className="app-nav-link" to="fake5">Fake 5</Link>                                                
      </div>      
      </nav>
      <Routes>  
        <Route index element={<HomePage />}></Route>                    
        <Route path="onepagecrud" element={<OnePageCrud key="1"/>}></Route>                                    
        <Route path="onepagecrud2" element={<OnePageCrud2 key="2"/>}></Route>                                    
        <Route path="onepagecrud3" element={<OnePageCrud3 key="3"/>}></Route>                                    
        <Route path="fake5" element={<FakePage5/>}></Route>                                                                            
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
