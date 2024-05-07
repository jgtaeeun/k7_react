
export default function MyListItem({title, imgUrl, content}) {
  return (
    <div className="flex w-full h-full justify-center items-center bg-lime-500 ">
      <div className="flex w-1/3 m-2">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="flex flex-col justify-between w-2/3 h-full m-2 p-2">
        <div>
           <h1 className="font-bold text-xl">{title}</h1>
           <p>{content}</p> 
        </div>
        <div className="flex justify-end items-center ">
           <span>💚</span> 
           <span className="inline-flex mx-2 font-bold" >좋아요</span>
           <span className="font-bold text-xl">0</span>
        </div>
      </div>
    </div>

  )
}
