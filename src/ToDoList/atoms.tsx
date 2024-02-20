import { atom, selector } from "recoil";



/*
    enums 열거형은 TypeSctipt가 제공하는 기능 중 하나.
    이름이 있는 상수들의 집합을 정의 할 수 있다
    열거형을 사용하면 의도를 문서화 하거나 구분 되는 사례 집합을 더 쉽게
    만들 수 있다. 
    TypeSctipt 는 숫자와 문자열- 기반 열거형을 제공한다.
    
    숫자열거형
    enums Direction {
        UP = 1,
        DOWN,
        LEFT,
        RIGHT
    }

    문자열거형
     enums Direction {
        UP : "UP",
        DOWN: "DOWN",
        LEFT: " LEFT",
    }

        등등...

*/

export const enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
}
 

export interface IToDo {
    text:string;  
/* 
    카테고리를 string으로 해버리면 
    [{text: "hello",  category : "lalallala"}]
    => 이것도 허용이 됨. 
    그래서 "TO_DO" | "DOING" | "DONE"
    이 세가지 상태로 제한해서 받는것. 
    todo를 생성하면, 투두는 모든 stirng이 아닌 여기 
    "TO_DO" | "DOING" | "DONE" 셋중 하나의 string을 받게됨.
*/
    category : Categories;
    id : number;
}


//사용자가 현재 선택한 카테고리에 투두 저장
export const categoryState = atom<Categories>({
    key:"category",
    default : Categories.TO_DO,
});


export const toDoState = atom<IToDo[]>({
    key : "toDo",
    default : [],
});


/*
    selector
    기존 atom state를 가져와 기존 state를 이용해 새로운 state를 만들어
    반환할 수 있다. 기존 state를 이용할뿐 변형시키지 않음. 
    key와, get 함수를 가짐. 

*/
export const toDoSeletor = selector({
    //
    key: "toDoSeletor",
    //get은obj 형식으로 옵션중 get이 있고 {} 그걸 한번에 찾아 갖어온거임.
    get:({get}) => {
        const toDos = get(toDoState);
        const cateroty = get(categoryState);
                // selector가 toDos , cateroty를 받아와 category에 따라 toDo를 분류
        return  toDos.filter((toDo)=> toDo.category === cateroty);
     
        /* 
        .filter는 조건문에서 거른 값만 가지고 오는것. 
        우리의 atom toDoState는 default : [] 빈 배열만 존재하고
        거기에 "TO_DO" | "DOING" | "DONE" 이 세개가 한데 뭉쳐 저장되어 있음.
        카테고리를 분류해  리턴해준것 !

        if(category === "TO_DO") return toDos.filter((toDo)=> toDo.category === "TO_DO");
        if(category === "DOING") return  toDos.filter((toDo)=> toDo.category === "DOING"),
        if(category === "DONE") return  toDos.filter((toDo)=> toDo.category === "DONE"),     
        => 로직 
        */

    }
});