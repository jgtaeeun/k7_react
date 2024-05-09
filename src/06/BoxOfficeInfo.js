export default function BoxOfficeInfo({select}) {
    // console.log(select)
    
  return (
    
    <div className=" px-6 py-3 bg-black text-white text-center font-bold ">
     [{select.movieNm}] {'\u00A0'} 개봉일 {'\u00A0'}: {'\u00A0'}{select.openDt}
       
    </div>
    
  );
}
