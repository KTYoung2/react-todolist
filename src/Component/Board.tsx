import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";



const BoardWrapper = styled.div`
  background-color: ${(props) => props.theme.bordColor};
  border-radius: 10px;
  width: 300px;
  min-height: 300px;
  padding: 20px 10px;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 200px;
  
`;



interface IBoardProps{
    toDos : string[];
    boardId : string;
}

function Board({toDos, boardId} : IBoardProps){
    return (
        <BoardWrapper>
        <Title>{boardId}</Title>
        <Droppable droppableId={boardId}>
            {(magic) => ( 
            <div ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map( (toDo, index) => (
                <DragabbleCard key={toDo} index={index} toDo={toDo}/>
            ))}
            {magic.placeholder}
            </div>
            )}
      </Droppable>
      </BoardWrapper>
    );
}

export default Board;