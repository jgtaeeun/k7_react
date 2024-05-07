

function MyDiv3(probs) {
  return (
    <div className='flex flex-col p-10 m-10 w-3/4  h-3/4 text-lg  text-white bg-lime-500'>
      <div className="w-full">
       {`${probs.dn1} > ${probs.dn2} > ${probs.dn3}`}
      </div>
      
    </div>
  );
}

export default MyDiv3;




