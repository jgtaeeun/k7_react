import { Link } from "react-router-dom";

export default function RouteHome() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="w-full text-2xl font-bold flex justify-center items-center">
        RouteHome
      </h1>
      <div className="w-1/2 grid grid-cols-2 ">
        <div className="w-full flex flex-col justify-center items-center">
            <h2 className="w-full text-2xl font-bold flex justify-center items-center bg-slate-200">Page1</h2>
            <ul  className='w-full  bg-slate-100 flex-col flex justify-center items-center'>
                <li><Link to='/p1/🍎'>사과🍎</Link></li>
                <li><Link to='/p1/🍌'>바나나🍌</Link></li>
                <li><Link to='/p1/🥕'>당근🥕</Link></li>
            </ul>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
            <h2 className="w-full text-2xl font-bold flex justify-center items-center  bg-slate-200">Page2</h2>
            <ul   className='w-full  bg-slate-100 flex-col flex justify-center items-center'>
                <li><Link to='/p2?item=🍎'>사과🍎</Link></li>
                <li><Link to='/p2?item=🍌'>바나나🍌</Link></li>
                <li><Link to='/p2?item=🥕'>당근🥕</Link></li>
                <li><Link to='/p2?item=🍎&?item=🍌&?item=🥕'>믹스🍎🍌🥕</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}
