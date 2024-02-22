import styled from "styled-components";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";


const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: linear-gradient(135deg,rgb(238, 0, 153),rgb(221, 0, 238));
`;



const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

/*
useMotionValue가 consol.log가 한번 실행 되는 이유 
=> value가 바뀌어도 컴포넌트를 리렌더링 시키지 않아서 !!
*/
function MotionValue(){
                /*  MotionValue는 
                    애니메이션의 특정값과 속도를 계속 추적할 수 있도록 도와줌.
                    다만, 기본값은 0 이어야 하며 추적하려면, style prop에 연결 해야함 
                */
    const x = useMotionValue(0);
    /*
        useTransform
        : 한 값 범위에서 단른 값 범위로 매핑해 
          다른 MotionValue의 output을 변환하는 MotionValue를 만든다. 
         useTransform(범위(값), [원하는 값의 범위의 배열], [output => 변환 값의 배열])
         당연하지만 input, output 배열 길이는 같아야 한다.
    */
    const rotate = useTransform(x, [-800, 800], [-360, 360]);
    const backGround = useTransform(x, [-800, 0, 800], [
        "linear-gradient(135deg,rgb(238, 0, 0),rgb(238, 0, 255))",
        "linear-gradient(135deg,rgb(255, 198, 74),rgb(0, 20, 238))",
        "linear-gradient(135deg,rgb(82, 255, 146),rgb(206, 238, 0))",
    ]);
    /*
        useScroll() 
        : 뷰포트가 스크롤될 때 업데이트 되는 MotionValue를 리턴한다. 
          - scrollY : 실제 수직 스크롤 픽셀(px)
          - scrollX : 실제 수평 스크롤 픽셀(px)
          - scrollYProgress : 0~1 사이의 수직 스크롤 (가장 상단 0, 가장하단 1)
          - scrollXProgress : 0~1 사이의 수평 스크롤 
    */
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [ 0,1 ] , [1, 5]);
    return (
        <Wrapper style={{background : backGround}}>
          <Box style={{x:x, rotateZ: rotate}} drag="x" dragSnapToOrigin/>
          <Box style={{scale : scale}}/>
        </Wrapper>
    );
}

export default MotionValue;