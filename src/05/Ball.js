

export default function Ball({n}) {       //n은 숫자가 들어오는 것
  const colorN={                            //Object (키:값)
    'b0' : 'bg-violet-400',
    'b1' : 'bg-red-400',
    'b2' : 'bg-blue-400',
    'b3' : 'bg-green-400',
    'b4' : 'bg-yellow-400',

  }
  return (  //백틱문자는 중괄호로 묶어주기
    <div className={`inline-flex w-16 h-16  m-2 justify-center items-center rounded-full 
                    ${colorN['b'+ Math.floor(n/10)]} text-white text-xl font-bold`}>
      {n}
    </div>
  )
}
