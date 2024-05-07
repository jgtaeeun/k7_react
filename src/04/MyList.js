import MyListData from "./MyListData.json";
import MyListItem from "./MyListItem";
export default function MyList() {
    
  //const tags= MyListData.map(item => console.log(item.imgUrl))
  //const tags= MyListData.map(item => <img src={item.imgUrl} />)
  const tags= MyListData.map(item => <MyListItem    key ={item.title}  //동적으로 만들 때 키값 주어야 한다.
                                                    title={item.title}
                                                    imgUrl={item.imgUrl}
                                                    content={item.content} /> )

  return(
    <div className="w-full grid grid-cols-2 gap-4">
       {tags} 
       
      
    </div>
  );
}