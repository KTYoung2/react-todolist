import styled from "styled-components";
import { AnimatePresence, color, motion } from "framer-motion";
import { useState } from "react";


const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: linear-gradient(135deg,rgb(255, 0, 0),rgb(22, 255, 255));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding-bottom: 40px;
`;


const Circle = styled(motion.div)`
    background-color: #ffffff;
    height: 100px;
    width: 100px;
    border-radius: 50px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Button = styled(motion.button)`
    width: 100px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: white;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    color: rgb(55, 0, 255);
`;


const btnVariant = {
    hover : {scale: 1},
    tap: { scale: 1.5, color: "rgb(255, 132, 0)" },
}

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const box = ["1","2","3","4"];
function Challenge() {
    const [btnClick, setBtnClick] = useState(false);
    const toggle = () => setBtnClick((prev)=> !prev);
    const [clickId, setClickId] = useState<null | string>(null);
    return (
        <Wrapper>
            <Grid>
            {["1", "2", "3", "4"].map((n)=> ( 
                    <Box 
                        whileHover={{scale: 1.1}}
                        key={n} 
                        layoutId={n} 
                        // {()=> setClickId(n)(함수)} 클릭했을 때 이벤트 발생
                        onClick={()=> setClickId(n)}>
                    {!btnClick ? <Circle layoutId="circle"/> : null}
                    </Box>
            ))}
            </Grid>
            <Button 
                variants={btnVariant}
                whileHover="hover"
                whileTap="tap"
                onClick={toggle}>
                Switch
            </Button>
            <AnimatePresence>
            { clickId ? (
                <Overlay 
                    onClick={()=> setClickId(null)}
                    initial={{backgroundColor: "rgba(0,0,0,0)"}} 
                    animate={{backgroundColor: "rgba(0,0,0,0.4)"}} 
                    exit={{backgroundColor: "rgba(0,0,0,0)"}}
                >
                <Box layoutId={clickId} style={{width: 400, height: 250, backgroundColor :"white"}}/>
                </Overlay> 
                ) : null }
            </AnimatePresence>
        </Wrapper>
    );
}

export default Challenge;