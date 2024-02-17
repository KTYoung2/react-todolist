import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion"
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background:linear-gradient(135deg,#e09,#d0e);
`;

const BigBox = styled(motion.div)`
    width: 600px;
    height: 600px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;


const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;




function Animation() {
    const x = useMotionValue(0);
    return (
        <Wrapper>
            <Box style={{ x }} drag="x" dragSnapToOrigin />    
        </Wrapper>
    );
}


export default Animation;