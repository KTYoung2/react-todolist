import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";


const Card = styled.div<{isDragging : boolean}>`
  width: 100%;
  border-radius: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.isDragging ? "#FF8080" : props.theme.cardColor};
  box-shadow: ${(props) => props.isDragging ? "0px 2px 5px #a4b0be" : "none"};
  margin-bottom: 5px;

  `;


interface IDragabbleCardProps {
    toDoId: number;
    toDoText : string;
    index: number;
}

function DragabbleCard({ toDoId, toDoText, index } : IDragabbleCardProps) {
return (
    <Draggable draggableId={toDoId+""} index={index}>
    {(magic,snapshot) => ( 
      <Card 
        isDragging ={snapshot.isDragging}
        ref={magic.innerRef} 
        {...magic.draggableProps}
        {...magic.dragHandleProps}>
          {toDoText}
      </Card>
      )}
    </Draggable>
    
    );
}

export default React.memo(DragabbleCard);
