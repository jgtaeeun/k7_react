import './App.css';
import { RiHome8Line } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import logo from './logo.svg';
/*import MyDiv from './03/MyDiv';*/
/*import MyList from './04/MyList';*/
import Lotto from './05/Lotto';

function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-lg h-screen overscroll-y-auto mx-auto">
      <header className='flex justify-between items-center text-3xl font-bold h-20 p-10 bg-slate-100'>
        <p>리액트실습</p>
        <p><RiHome8Line className='text-5xl text-yellow-300' /></p>
      </header>
      <main className='grow'>
         {/*<div className='flex justify-center items-center'> 
          <img src={logo} className='App-logo' alt='logo' />
        </div>*/}
        {/*<MyDiv />*/}
        {/*<MyList />*/}
        <Lotto />

      </main>
      <footer className='flex justify-center items-center text-xl text-white bg-slate-800 h-20'>
        <p>＠2024 k-7 digital.All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
