import './App.css';
import FirstPage from './Components/FirstPage';
import { Routes, Route } from 'react-router-dom'
import Loadshedding from './Components/Loadshedding';
import Navigation1 from './Components/Navigation1';
import Navigation2 from './Components/Navigation2';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Navigation1 />
      <Navigation2 />
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/loadshedding' element={<Loadshedding />} />
      </Routes>
      <div className='row container-fluid'>
        <div className='col-md-12  '>
          <Footer className='' />
        </div>
      </div>
      <div className='row container-fluid lastrow'>
        <div className='col-md-8 lastcol '>
          <p><i class="fa fa-cc-visa fa-3x bottonicons m-2 mx-3" aria-hidden="true"></i>
            <i class="fa fa-cc-mastercard fa-3x bottonicons m-2 mx-3" aria-hidden="true"></i>
            <i class="fa fa-paypal m-2 fa-3x bottonicons mx-3" aria-hidden="true"></i>
            <i class="fa fa-money m-2 fa-3x bottonicons mx-3 " aria-hidden="true"></i>
            <i class="fa fa-mobile m-2 fa-3x bottonicons mx-3" aria-hidden="true"></i>
            <i class="fa fa-cc-discover m-2 fa-3x bottonicons mx-3" aria-hidden="true"></i>
          </p>
        </div>
      </div>
      <div className='col-md-4 '>

      </div>
    </>
  );
}

export default App;
