import React,{useState} from 'react';
import styled from "styled-components";

import { sliderItems } from '../data';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { InsertEmoticon } from '@mui/icons-material';
import { mobile } from '../responsive';


const Container=styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
background-color:antiquewhite ;
overflow:hidden;
${mobile({display:"none"})}
`;

const Arrow=styled.div`
width:50px;
height:50px;
background-color :white ;
border-radius : 50 % ;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
top:0;
bottom:0;
left : ${props=>props.direction=== "left" && "10px"} ;
right :${props=>props.direction=== "right" && "10px"} ;                                  
margin:auto;
cursor:pointer;
z-index:2;
`;

const Wrapper=styled.div`
    height : 100 % ;
    dispaly:flex;
    transform: translateX(0vw)`;



const Slide=styled.div `
width : 100vw ;
height : 100vh ;
display :flex ;
align-items :center ;
background-color: ${props=>props.bG};
`;


const ImgContainer=styled.div `
height:100%;
flex:1;`;


const Image=styled.img`
height:80%;`;

const InfoContainer = styled.div`
flex:1;
padding:50px;` ;

const Title = styled.h1`
font-size:70px;`;


const Desc = styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`;


const  Buttton=styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;`;


const Slider = () => {
    
    const[slideIndex,setSlideIndex]=useState(0);
    const handleClick=(direction)=>{};
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <KeyboardArrowLeftIcon/>
        </Arrow>
        <Wrapper>
            {sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                <ImgContainer > 
                <Image src={item.img}/>
                 </ImgContainer>
                <InfoContainer >
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                     <Buttton>SHOP NOW</Buttton>
                     </InfoContainer >
                </Slide>
                ))}
            
        </Wrapper>
       
        <Arrow direction="right"  onClick={()=>handleClick("right")}>
            <KeyboardArrowRightIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider
