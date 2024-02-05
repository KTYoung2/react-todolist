import { createGlobalStyle } from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import Board from "./Component/Board";



const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Noto+Sans+KR&family=Poppins:wght@300&display=swap');
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}

body {
  background-color: ${(props)=> props.theme.bgColor};
  font-family: 'Montserrat', sans-serif;
  color: black;
}

a {
  text-decoration: none;
  color:inherit;
}

`;



function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ( info: DropResult) => {
    const { destination, draggableId, source } = info;
    if(destination?.droppableId === source.droppableId){
      //같은 보드에서 움직임
        setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        //1. sourc.index 에서 아이템 삭제
        boardCopy.splice(source.index, 1);
        //2.destination?.index로 아이템 다시 돌려주기
        boardCopy.splice(destination?.index, 0, draggableId);
        return {
          ...allBoards,
          [source.droppableId] : boardCopy,
        };
      });}
  };
  return ( 
    <>
    <DragDropContext onDragEnd={onDragEnd}>
     <Wrapper>
      <Boards>
        {Object.keys(toDos).map((boardId)=> (
          <Board boardId={boardId} key={boardId} toDos={toDos[boardId]}/>
          ))}
      </Boards>
     </Wrapper>
    <GlobalStyle />
    </DragDropContext>
    </>
  );

}

export default App;
