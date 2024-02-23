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

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 50vw;
    gap: 15px;
    div:first-child{
        grid-column: span 2;
    }
    div:last-child{
        grid-column: span 2;
    }
`;


const Box = styled(motion.div)`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;



function SelectCard() {
    const [clickId, setClickId] = useState<null | string>(null);
    return (
        <Wrapper>
            <Grid>
                {["1", "2", "3", "4"].map((n)=> ( 
                    <Box 
                        key={n} 
                        layoutId={n} 
                        // {()=> setClickId(n)(함수)} 클릭했을 때 이벤트 발생
                        onClick={()=> setClickId(n)}/> 
                ))}
            </Grid>
            <AnimatePresence>
                { clickId ? (
                <Overlay 
                    onClick={()=> setClickId(null)}
                    initial={{backgroundColor: "rgba(0,0,0,0)"}} 
                    animate={{backgroundColor: "rgba(0,0,0,0.4)"}} 
                    exit={{backgroundColor: "rgba(0,0,0,0)"}}
                >
                <Box layoutId={clickId} style={{width: 600, height: 200}}/>
                </Overlay> 
                ) : null }
            </AnimatePresence>
        </Wrapper>
    );
}

export default SelectCard;