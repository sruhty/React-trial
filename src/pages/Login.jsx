import React,{Component, useState} from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import {useDispatch} from "react-redux";
import { useSelector } from 'react-redux';

const Container=styled.div`
width:100vw;
height:100vh;
bakgroud:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))
display:flex;
align-items:center;
justify-content:center;`;

const Wrapper=styled.div`
width:25%;
padding:20px;
${mobile({width:"75%"})}`;
const Form=styled.form`
display: flex;
flex-direction:column;

`;
const Title=styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Input=styled.input`
flex:1;
min-width:40%;
margin:10px 0px;`;

const Button=styled.button`
width:40%;
border:none;
padding:15px 20px;
cursor:pointer;
margin-bottom:10px;
`;
const Link=styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor:pointer;
`;
export const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch();
  const {isFetching,error}=useSelector((state)=>state.user);

  const handleClick=(e)=>{
    e.preventDefault()
    login(dispatch,{email,password});
  };
  return (
    <Container>
        <Wrapper>
            <Title>
                Sign In
            </Title>
            <Form>
                    <Input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                    <Input placeholder="password" type="password" 
                    onChange={(e)=>setPassword(e.target.value)}/>
                    
                    <Button onClick={handleClick} disabled={isFetching}>LogIN</Button>
                    
            </Form>
            <Link>Create new account</Link>
        </Wrapper>
    </Container>
  )
}
