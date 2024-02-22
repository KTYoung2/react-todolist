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

//스타일 컴포넌트에 애니메이션 적용 시키기 styled(motion.html element)
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

/*
    애니메이션을 사용하려면 motion에서 제공해주는
    props 이용

    initial => element 애니메이션 초기 상태 설정 {{ css element }}
    animate => element 애니메이션 최종상태
    transition => element 에니메이션 수정 (값이 한 상태에서 다른 상태로 움직임는 방식 설정)
*/

function Basic () {
    return (
        <Wrapper>
            <Box 
                transition={{ type : "spring", damping : 10 }}
                initial={{ scale : 0}} 
                animate={{ scale : 1 , rotateZ: 360 }}
            />
        </Wrapper>
    );
}

export default Basic;