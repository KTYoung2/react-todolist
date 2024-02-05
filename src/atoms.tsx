import { atom } from "recoil";


interface IToDoState {
    [key : string] : string[];

}

export const toDoState = atom<IToDoState>({
    key : "toDo",
    default: {
        "TO DO" : ["밥먹기","똥싸기"],
        Doing : ["김정우 바보","겨울바보","흔수바보"],
        Done : ["태영공주님이랑밥먹기"],
    },
});