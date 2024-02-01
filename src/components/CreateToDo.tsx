import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
    toDo : string;
}

function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState);
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const onSubmit = ({toDo} : IForm) => {
        setToDos((oldToDos) => [{ text:toDo, id : Date.now(), category:"TO_DO"},...oldToDos]);
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