import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "./atoms";



function ToDo( { text, category, id }: IToDo){
    const setToDos = useSetRecoilState(toDoState);
    //카테고리 바꾸기
    const onClick = (event : React.MouseEvent<HTMLButtonElement>) => {
            //button name에 접근
        const { 
            currentTarget : { name }, 
        } = event;
        //1.타겟 todo 찾기.
        setToDos((oldToDos) => {
                                //조건(Fn)에 만족하는 (todo)값의 index를 찾아줌
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
                                            //oldToDos[] 안에 있는 toDo.id 와 IToDo props에서 온 id와 같은지 비교
            /* 2. 원래의 toDo를 update해야함. 
                text와 id는 변경없이 category만 변경 되기 때문데 button에서 가져온 name을 넣어줘야함(바뀐 카테고리 이름).*/
            const newToDo = { 
                    text, 
                    id, 
                    category : name as any};
            return [
                //기존 투두 배열에 있던 아이템 0 ~ 타켓 todo 까지 자르고
                ...oldToDos.slice(0,targetIndex), 
                // 투두 배열에 새로운 투두들 넣고
                newToDo, 
                // 기존투투 배열에 새로운 투두 + 그위의 아이템까지 붙인다.
                ...oldToDos.slice(targetIndex+1)
            ];
        });
    }
    return(
        <li>
            <span>{text}</span>                       
            { category !== Categories.TO_DO && 
                <button name={Categories.TO_DO} onClick={onClick}>
                    ToDo
                </button>}
            { category !== Categories.DOING && 
                <button name={Categories.DOING} onClick={onClick}>
                    DOING
                </button>}
            { category !== Categories.DONE && 
                <button name={Categories.DONE} onClick={onClick}>
                    DONE
                </button>}
        </li>
    ); 
}


export default ToDo;