import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import ListUsers from './pages/list-users';
import ModalComponent from './pages/modal';
import Sidebar from './components/sidebar';
import Register from './pages/register';



function App() {
  const title = 'Aula 02 Descomplica';
  return (
    <div className="App">
       <Header title={title} />
       <div className='container-fluid'>
        <div className='row'>
          <BrowserRouter>
            <div className='col-md-3'>
              <Sidebar />
            </div>
            <div className='col-md-9'>
              <Routes>
                <Route path='/' element={<Home />} /> 
                <Route path='/about' element={<About />} />    
                <Route path='/listUsers' element={<ListUsers />} /> 
                <Route path='/modal' element={<ModalComponent />} />   
                <Route path='/register' element={<Register />} />   
              </Routes>
            </div>
          </BrowserRouter>
        </div>
       </div>
    </div>
  );
}


export default App;
