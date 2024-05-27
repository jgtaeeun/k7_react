import { atom, selector } from "recoil";

export const Atoms =atom({               
    key : 'Atoms',               
    default : 10
});

export const Atoms2 = selector({
    key:'Atoms2',
    get:({get})=>{
        return get (Atoms) *2;
    }
})