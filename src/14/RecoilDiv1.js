import { useEffect, useState } from "react"
import RecoilDiv2 from "./RecoilDiv2";
import { Atoms, Atoms2 } from "./Atoms";
import { useRecoilValue, useRecoilState } from "recoil";

export default function RecoilDiv1() {
    const n= useRecoilValue(Atoms);
    const n2= useRecoilValue(Atoms2);
  
    const [storage_n, setSTN] =useRecoilState(Atoms)

    useEffect(()=>{
      if (!localStorage.getItem('n') ) return
      setSTN(parseInt(localStorage.getItem('n')))
    },[])


    return (
    <div className="flex flex-col justify-center items-center
                    text-2xl font-bold">
    <div>
      RecoilDiv1 : n={n} n2={n2}
      RecoilDiv1 : n={storage_n} 
    </div>
    <div>
        <RecoilDiv2 />
    </div>
    </div>
  )
}
