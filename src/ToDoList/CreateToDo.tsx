import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./atoms";


interface ToDoData {
    toDo: string;
}


function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const { register,handleSubmit,formState :{errors}, setValue} = useForm<ToDoData>();
    const onSubmit = ({ toDo } : ToDoData ) => {
        /*  (recoil 의 요소) 리코일 값 변경 =>atom 컨트롤       
            setToDos는 두개의 동작 가능.
           직적접으로 state를 설정 하거나, 다른 함수를 받을 수 있음( 함수의 리턴값이 새로운 state 받음.)
            (oldToDos)=> 이전 state 를 담은 함수 (이전 TODO)
            [{text:toDo, id:Date.now(), category : "TO_DO"}, ...oldToDos] => 새로운 state 즉 새로운  TODO)!
                                                            ... => 배열 안의 요소 반환
        */                                              //카테고리에 냅다 적어 넣기
        setToDos(oldToDos => [{text:toDo, id:Date.now(), category : category }, ...oldToDos]);
        // (useForm의 요소) toDoList를 submit 한뒤(form에 제출) 빈 문자열로 바꿔주기. => input 컨트롤
        setValue("toDo", "");
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("toDo" , {
            required : {
                value : true,
                message : "메세지를 적어주새요",
            }
        })} placeholder="Write a to Do"/>
    <button>Add</button>
    <span style={{color:"red"}}>{errors?.toDo?.message}</span>
    </form>
    );
}


export default CreateToDo;