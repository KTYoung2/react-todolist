import CreateToDo from "./CreateToDo";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSeletor, toDoState } from "./atoms";
import ToDo from "./ToDo";


/*
    const value = useRecoilValue(toDoState); => 리코일 value 받아오는 함수
    const modeFn = useSetRecoilState(toDoState); => 리코일 value 수정 함수
    둘을 합친 것
        ↓
    const [value, setValue] = useRecoilState(toDoState);
    리코일 value 함수 , 리코일 value 변경 함수



*/


function ToDoList() {
    const toDos = useRecoilValue(toDoSeletor);
    const [ category, setCategory ] = useRecoilState(categoryState);
    const onInput = (event : React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    };
    return ( 
      <div>
        <h1>To Dos</h1>
        <hr />
        <select value={category} onInput={onInput}>
            <option value={Categories.TO_DO}>To Do</option>
            <option value={Categories.DONE}>Doing</option>
            <option value={Categories.DONE}>Done</option>
        </select>
        <CreateToDo />
        {/*  ToDo 컴포넌트도, toDos도 같은 interface IToDo 이기 때문에 
                text={toDo.text} category={toDo.category} id={toDo.id}
                이렇게 구구절절 쓰지 않고 ...(모든 원소를 풀어 놓는다는 의미)으로 접근 가능 !  */}
        {toDos?.map((toDo)=> (
            <ToDo key={toDo.id} {...toDo}/>
        ))}
      </div>
    );
  
  }
  
  export default ToDoList;