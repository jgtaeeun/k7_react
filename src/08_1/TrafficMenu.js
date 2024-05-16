import ButtonA from "../UI/ButtonA";

export default function TrafficMenu({title, c, sel, setSel}) {
    // const [sel, setSel]=useState();

    // // const title='대분류';
    // // const c = ['차대사람','차대차','차량단독','철길건널목'];
    // const title='중분류';
    // const c = ['횡단중','차도통행중','길가장자리구역통행중','보도통행중','기타'];
    const cTag=c.map(item=> <ButtonA key={item} caption={item} 
                                    bcolor={sel===item ? 'orange' :'blue'} 
                                    handleClick={()=>{handleClick(item)}} />)
    
    const handleClick=(n)=>{
       setSel(n)
    }

    return (
    <div className="w-full flex justify-start items-start my-5">
      <div className="w-1/5  flex justify-start items-center">
        교통사고{title}
      </div>
      <div className="w-4/5 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {cTag}
      </div>
    </div>
  )
}
