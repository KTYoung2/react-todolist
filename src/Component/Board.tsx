import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";
import { useForm } from "react-hook-form";
import { ITodo, toDoState } from "../atoms"; 
import { useSetRecoilState } from "recoil";

const BoardWrapper = styled.div`
  background-color: ${(props) => props.theme.bordColor};
  border-radius: 10px;
  width: 300px;
  min-height: 300px;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 5px;
`;

interface IAreaProps {
  isDraggingFromThis : boolean;
  isDraggingOver : boolean;
};

const Area = styled.div<IAreaProps>`
  background-color: ${(props) => props.isDraggingOver ? "#f1f2f6" : props.isDraggingFromThis ? "#ced6e0" : "#dfe4ea"};
  flex-grow: 1;
  transition:  background-color .3s ease-in-out;
  padding: 20px;
`;

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

interface IBoardProps{
    toDos : ITodo[];
    boardId : string;
}

interface IForm {
  toDo : string;
}



function Board({toDos, boardId} : IBoardProps){
  const setToDos = useSetRecoilState(toDoState);
  const { register, setValue, handleSubmit} = useForm<IForm>();
  const onValid = ({toDo} : IForm) => {
    const newToDo = {
      id : Date.now(),
      text : toDo,
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId] : [
          newToDo, ...allBoards[boardId]
        ]
      };
    });
    setValue("toDo", "");
  }
    return (
        <BoardWrapper>
        <Title>{boardId}</Title>
        <Form onSubmit={handleSubmit(onValid)}>
          <input 
            {...register("toDo", { required : true })} 
              type="text" 
              placeholder={`Add task on ${boardId}`}
          />
        </Form>
        <Droppable droppableId={boardId}>
            {(magic, snapshot) => ( 
            <Area 
              isDraggingOver={snapshot.isDraggingOver} 
              isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
              ref={magic.innerRef} 
              {...magic.droppableProps}
              >
              {toDos.map( (toDo, index) => (
                <DragabbleCard 
                  key={toDo.id} 
                  index={index} 
                  toDoId={toDo.id} 
                  toDoText={toDo.text}
                />
            ))}
            {magic.placeholder}
            </Area>
            )}
      </Droppable>
      </BoardWrapper>
    );
}

export default Board;