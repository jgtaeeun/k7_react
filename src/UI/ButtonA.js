
export default function ButtonA({caption, bcolor, handleClick}) {
    const colorB={                           //  bcolor의 Object
        'blue' : 'bg-blue-400',
        'orange' : 'bg-orange-400'
    }
    const colorBHover={                     //  버튼이 클릭되었을 때 컬러
        'blue' : 'hover:bg-blue-800',
        'orange' : 'hover:bg-orange-800'
    }
  
    return (
    <button className={`inline-flex justify-center px-5 py-4 m-2 text-white items-center font-bold rounded-md 
                        ${colorB[bcolor]} ${colorBHover[bcolor]}`} onClick={handleClick}>
        {caption}
    </button>
      
    
  )
}
