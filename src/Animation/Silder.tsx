import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: linear-gradient(135deg,rgb(255, 0, 0),rgb(22, 255, 255));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  position: absolute;
  top : 100px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const box = {
    invisible :(back:boolean) => ({        
        x : back ? -500 : 500,
        opacity : 0,
        scale : 0,
    }),
    visible : {
        x : 0,
        opacity : 1,
        scale : 1,
        transition : {
            duration : 0.5,
        },
    },
    exit: (back : boolean) => ({
        x : back ? 500 : 500,
        opacity : 0,
        scale : 0,
        transition : {
            duration : 0.5,
        },
    })
}

/*
 custom
 각 애니메이션 컴포넌트에 대해 동적 variants를 다르게 적용할 때 사용할 수 있는
 사용자 지정 데이터. 
 사용하려는 컴포넌트와, AnimatePresence 둘다 custom 설정을 해줘야 동작한다.
 variants은 function 으로 정의해야함. 
   invisible :(back:boolean) => ({        
        x : back ? -500 : 500,
        opacity : 0,
        scale : 0,
    }),
*/

function  Silder () {
    const [visible, setVisible] = useState(1);
    const [back, setBack] = useState(false);
    const next = () => {
        setBack(false);
        setVisible((prev)=> prev === 10 ? 10 : prev + 1);
    }; 
    const prev = () => {
        setBack(true);
        setVisible((prev)=> prev === 1 ? 1 : prev - 1);
    }; 
    return (
        <Wrapper>
            <AnimatePresence custom={back}>
                    <Box 
                        custom={back}
                        variants={box} 
                        initial="invisible"
                        animate="visible"
                        exit="exit"
                        key={visible}>
                        {visible}
                    </Box>
            </AnimatePresence>
            <button onClick={next}>NEXT</button>
            <button onClick={prev}>PRVE</button>
        </Wrapper>
    );
}

export default Silder;