import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: linear-gradient(135deg,rgb(238, 0, 153),rgb(221, 0, 238));
`;

const BigBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


const  boxVar = {
  Hover : { scale : 1.5, rotateZ: 90},
  Tap : { scale: 1 , borderRadius : "100px"},
  //에니메이션 컬러 설정은 string rgba 로 명시해줘야 됨
  Drag : {
  backgroundColor : "rgba(93, 169, 255, 0.817)", 
  transition : {
    duration : 5,
  },
}
}

/*
drag => 드레그가 실행 애니메이션
  - drag="x or y"  : x축 또는 y축에 드레그 제약 걸기
  - dragConstraints={{top: -50, bottom: 50, right: 50, left: -50}}
    : 드레그 영역 제한하기
  - dragSnapToOrigin
    : 드레그를 놓으면 원래의 위치로 돌려놓기
whileDrag => 드레그가 되는 동안 변형되는 애니메
whileHover => Hover 될때 실행되는 에니메
whileTa => 클릭 했을 때 실행되는 "

*/

function Gestures() {
  const bigBoxRef = useRef<HTMLDivElement>(null);
    return (
        <Wrapper>
          <BigBox ref={bigBoxRef}>
            <Box 
              drag
              dragSnapToOrigin
              dragConstraints={bigBoxRef}
              variants={boxVar}
              whileHover="Hover" 
              whileTap="Tap" />
          </BigBox>
        </Wrapper>
    );
}

export default Gestures;