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
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
    background-color: aqua;
    height: 100px;
    width: 100px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

/*

    layout : boolean | "position" | "size"
    true인 경우 컴포넌트는 레이아웃이 변경될 때 새위치에 자동적으로 애니메이션을
    적용한다. 
    
    <Box style={{
                justifyContent : click? "center" : "flex-start", 
                alignItems : click? "center" : "flex-start"}}>
                    <Circle layout />
    </Box>

    layoutId
    두개의 다른 컴포넌트여도 동일한 layoutId를 가진 모션 컴포넌트들 간에 
    애니메이션을 적용할 수 있다. 
    layoutId가 있는 새 컴포넌트가 추가되고 다른 컴포넌트가 제거되면 이전 
    컴포넌트에서 새 컴포넌트로 레이아웃 에니메이션을 수행한다. 
    새컴포넌트는 이전 컴포넌트의 애니메이션 값도 초기 상태로 상속한다. 

*/


function Layout() {
    const [click, setClick] = useState(false);
    const toggle = () => setClick((prev) => !prev);
    return (
        <Wrapper onClick={toggle}>
            <Box>
               { !click ? <Circle layoutId="circle" style={{borderRadius:50}}/> : null} 
            </Box>
            <Box>
              { click ? <Circle layoutId="circle" style={{borderRadius:0, scale: 1.5}}/> : null} 
            </Box>
        </Wrapper>
    );
}

export default Layout;