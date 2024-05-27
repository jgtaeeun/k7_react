import RecoilDiv3 from "./RecoilDiv3"

export default function RecoilDiv2({div2n, setter,div2n2}) {
  
  return (
    
    <div className="flex flex-col justify-center items-center
                    text-2xl font-bold">
    <div>
      RecoilDiv2 : n={div2n} n2={div2n2}
    </div>
    
    <div>
     <RecoilDiv3  div3n={div2n} setn={setter} div3n2={div2n2}/>
    </div>
    </div>
    
  )
}
