import './App.css';
import { RiHome8Line } from "react-icons/ri";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";

import Lotto from './05/Lotto';
import MyClock from './02/MyClock' ;
import BoxOffice from './06/BoxOffice';
import Traffic from './08_1/Traffic';
import FoodMain from './07/FoodMain';
import Fcst from './13/Fcst';
import FcstList from './13/FcstList';

function App() {
  return (
    <div className="h-screen flex flex-col w-full max-w-screen-lg overscroll-y-auto mx-auto p-2">
      <BrowserRouter>
      <header className='W-full h-20 flex justify-between items-center text-xl font-bold bg-slate-100 mt-5 p-3'>
       
          <p className=' flex justify-start items-center w-1/8 p-2'>리액트 실습</p>
       
          <ul  className='w-3/4  bg-slate-100 flex justify-between  items-center'>
            <li className='p-2'><Link to='/'>시계</Link></li>
            <li className='p-2'><Link to='/Lotto'>로또</Link></li>
            <li className='p-2'><Link to='/BoxOffice'>일일박스오피스</Link></li>
            <li className='p-2'><Link to='/FoodMain'>음식업체</Link></li>
            <li className='p-2'><Link to='/Traffic'>교통사고정보</Link></li>
            <li className='p-2'><Link to='/Fcst'>단기예보</Link></li>
          </ul>
       
        
        
          <p className='w-1/8'><RiHome8Line className='text-5xl text-yellow-300 ' /></p>
       
        
        

      </header>
      <main className='grow W-full max-h-full justify-center items-center overflow-y-auto bg-white'>
        
          
          
            <Routes>
              <Route path='/' element={<MyClock />} />
              <Route path='/Lotto' element={<Lotto />} />
              <Route path='/BoxOffice' element={ <BoxOffice />} />
              <Route path='/FoodMain' element={<FoodMain />} />
              <Route path='/Traffic' element={<Traffic />} />
              <Route path='/Fcst' element={<Fcst />} />
              <Route path='/FcstList' element={<FcstList/>} />
            </Routes>
          
        
         
       
      </main>
      <footer className='h-20 flex justify-center items-center text-xl text-white bg-slate-800 '>
        <p>＠2024 k-7 digital.All rights reserved</p>
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
