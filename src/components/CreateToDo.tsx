import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "./toDOatoms";

interface IForm {
    toDo : string;
}

function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const onSubmit = ({toDo} : IForm) => {
        setToDos((oldToDos) => [{ text:toDo, id : Date.now(), category},...oldToDos]);
        setValue("toDo", "");
      };   
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("toDo", { 
              required: "오늘의 할 일을 적어주세요.",
           })} 
          placeholder="Write a to do" />
        <button>Add</button>
    </form>
    )
}


export default CreateToDo;