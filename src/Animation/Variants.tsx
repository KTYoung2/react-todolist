import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: linear-gradient(135deg,rgb(238, 0, 153),rgb(221, 0, 238));
`;


const Box = styled(motion.div)`
  width: 250px;
  height: 250px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  place-self: center;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

/* 에니메이션에서 사용할 state를 js objtct 형식으로 설정해줄 수 있음
    가장 중요한 건 Variants 오브젝트를 애니메이션 컴포넌트에 주고 싶을때
    variants={오브젝트NAME} 설정
    initial="오브젝트 props name" 오브젝트 props 와 같은 이름이어야함 
    animate="오브젝트 props name"
*/

const boxVariants = {
    start : {
        opacity: 0,
        scale : 0.5,
    },
    end : { 
        opacity: 1,
        scale : 1,
        transition : {
            type : "spring",
            duration : 0.5,
            bounce: 0.5,
            //부모 Variants에서 자식 Variants 컨트롤 가능 ~ 
            delayChildren: 0.5,
            staggerChildren : 0.2,
        },
    },
} 

const circleVariants = {
    start : {
        opacity: 0,
        y : 10,
    },
    end : {
        opacity: 1,
        y : 0,
    },
}


function Variants () {
    return (
        <Wrapper>
            <Box
                variants={boxVariants}
                initial="start"
                animate="end" 
            >
                {/* 보무 컴포넌트가 있고, 그 컴포넌트에 initial, animate 이름이 있다면,
                    기본값으로 모션은 자식 컴포넌트에서 똑같이 initial, animate 이름을 복사 붙여넣기 해줌  
                    그래서 자식 애니메션을 설정할 때 
                    설정은 다르게 해도 되지만, 부모 컴포넌트 props 이름은 동일하게 따르고
                    variants만 연결해주면 된다 ! 
                     */}
                <Circle variants={circleVariants}/>
                <Circle variants={circleVariants}/>
                <Circle variants={circleVariants}/>
                <Circle variants={circleVariants}/>
            </Box>
        </Wrapper>
    );
}

export default Variants;