import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: linear-gradient(135deg,rgb(238, 0, 153),rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  position: absolute;
  top: 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants  = {
    start : {
        opacity:0,
        scale : 0, 
    },
    ing : {
        opacity:1,
        scale : 1,
        rotateZ: 360,
    },
    end : {
        opacity:0,
        y: 20,
    },
}

/*
    AnimatePresence 
    를 사용하면 리액트 트리에서 컴포넌트가 제거되는 
    컴포넌트에 애니메이션 효과를 줄 수 있다.
    exit (종료 컴포넌트)
    이 컴포넌트가 트리에서 제거 될 떄 애니메이션 할 대상 
*/



function  Presence () {
    const [ showing, setShowing ] = useState(false);
    const toggle = () => setShowing((prev)=> !prev);
    return (
        <Wrapper>
            <button onClick={toggle}>ClickMe</button>
            <AnimatePresence>
                { showing ? 
                    <Box 
                        variants={boxVariants}
                        initial="start"
                        animate="ing"
                        exit="end"
                    /> 
                    : null }
            </AnimatePresence>
        </Wrapper>
    );
}

export default Presence;