import ButtonA from "../UI/ButtonA";

export default function RecoilDiv3({div3n ,setn,div3n2}) {

  const handleUp =()=>{
    setn(div3n +1  )

  }

  const handleDown =()=>{
    setn(div3n-1  )
    
  }

  return (
    <div className="flex flex-col justify-center items-center
    text-2xl font-bold">
    <div>
        {/* RecoilDiv3 : n={div3n} n2={div3n2} */}
        RecoilDiv3 : n2={div3n2}
    </div>
    <div>
        <ButtonA caption='증가' bcolor='orange' handleClick={handleUp}/>
        <ButtonA caption='감소' bcolor='orange' handleClick={handleDown}/>
    </div>
    </div>
  )
}
