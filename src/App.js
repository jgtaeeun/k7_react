import './App.css';
import { RiHome8Line } from "react-icons/ri";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";

import Lotto from './05/Lotto';
import MyClock from './02/MyClock' ;
import BoxOffice from './06/BoxOffice';
import Traffic from './08_1/Traffic';
import FoodMain from './07/FoodMain';



function App() {
  return (
    <div className="h-full flex flex-col w-full max-w-screen-lg overscroll-y-auto mx-auto p-2">
      <BrowserRouter>
      <header className='W-full h-30 flex justify-start items-start text-xl font-bold bg-slate-100 '>
        <div className='W-1/4 flex justify-center items-center   mt-8  p-7'>
          <p>리액트 실습</p>
        </div>
        <div className='W-1/2 flex justify-center items-center  mt-5 p-7'>
          <ul  className='w-full  bg-slate-100 flex justify-center items-center'>
            <li className='p-5'><Link to='/'>시계</Link></li>
            <li className='p-5'><Link to='/Lotto'>로또</Link></li>
            <li className='p-5'><Link to='/BoxOffice'>일일박스오피스</Link></li>
            <li className='p-5'><Link to='/FoodMain'>음식업체</Link></li>
            <li className='p-5'><Link to='/Traffic'>교통사고정보</Link></li>
          </ul>
       
        </div>
        <div className='W-1/4 flex justfy-center items-center  p-7 mt-5'>
        <p><RiHome8Line className='text-5xl text-yellow-300' /></p>
        </div>
        
        

      </header>
      <main className='grow'>
        <div className="W-full h-3/4 flex flex-col justify-start items-center bg-slate-200">
          
          
            <Routes>
              <Route path='/' element={<MyClock />} />
              <Route path='/Lotto' element={<Lotto />} />
              <Route path='/BoxOffice' element={ <BoxOffice />} />
              <Route path='/FoodMain' element={<FoodMain />} />
              <Route path='/Traffic' element={<Traffic />} />
            
             
            </Routes>
          
        </div>
         
       
      </main>
      <footer className='h-1/16 flex justify-center items-center text-xl text-white bg-slate-800 h-20'>
        <p>＠2024 k-7 digital.All rights reserved</p>
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
