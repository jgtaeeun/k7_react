export default function Card() {

  const imgurl="http://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg"
  const title = "태종대유원지"
  const content=" 부산광역시 영도구 동삼동"
  const htag="태종대유원지, 부산광역시 영도구, 명승 제17호, 태종사, 절, 사찰, 종교, 불교"

  return (
    <div className="bg-yellow-200 w-full h-full flex items-center justify-center">
     <div className="w-1/2 h-1/2 bg-green-200">
      <img className="w-full h-1/2 bg-orange-200" src={imgurl} alt={title}/>
      <div className="w-full h-1/4 bg-blue-200 flex flex-col">
        <span className="h-1/2 bold text-2xl p-2 bg-red-300">
          {title}
        </span>
        <p className="h-1/2 bold text-xl p-2 bg-red-400">
            {content}
        </p>
      </div>
      <div className="w-full h-1/4 bg-blue-400 flex justify-center items-center">
        <span>{htag}</span>
      </div>
     </div>
    </div>
  )
}
