import React from 'react';
import NavBar from './common/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./img/logo.svg";
import ImageUpload from './pages/ImageUpload';
import './App.css';
//import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Glass from './pages/Glass';
//<ImageUpload/>

//const navigate = useNavigate();

//const navigateToPurchase = () => {
//  navigate("/glass");
//};
//onClick={navigateToPurchase()}



function App() {

  return (
    <div className="App">
     <NavBar/>
     <img src={logo}/>
     <div className='button1' style={{paddingTop: '50px'}}>
      <Link to="/glass"><Button variant="primary" style={{marginRight: '10px'}}  >안경</Button>{' '}</Link>
      <Button variant="primary" style={{marginRight: '10px'}}  >헤어스타일</Button>{' '}
      <Button variant="primary" style={{marginRight: '10px'}}  >눈썹</Button>{' '}
     </div>
     
    </div>
    
  );
}

export default App;
