import MyDiv3 from "./MyDiv3"

function MyDiv2(probs) {
  return (
    <div className="flex flex-col  justify-center items-center p-10 m-10 w-3/4  h-3/4 text-lg  text-white bg-lime-700">
      <div className="w-full" >
        {`${probs.dn1} > ${probs.dn2}`}
      </div>
      
      <MyDiv3 dn1={probs.dn1}dn2={probs.dn2}dn3={probs.dn}/>
    </div>
  );
}

export default MyDiv2;
