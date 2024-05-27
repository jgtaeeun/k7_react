import RecoilDiv3 from "./RecoilDiv3"
import { Atoms2 } from "./Atoms";
import { useRecoilValue } from "recoil";

export default function RecoilDiv2() {
  const n2= useRecoilValue(Atoms2);
  return (
    
    <div className="flex flex-col justify-center items-center
                    text-2xl font-bold">
    <div>
      RecoilDiv2 : n2={n2}
    </div>
    
    <div>
     <RecoilDiv3 />
    </div>
    </div>
    
  )
}
