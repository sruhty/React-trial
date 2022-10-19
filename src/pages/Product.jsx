import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements';
import Products from '../components/Products'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import { addProduct } from '../redux/cartRedux';
import {useDispatch} from "react-redux";

const Container=styled.div``;

const Wrapper = styled.div `
padding:50px;
display:flex;
${mobile({padding:"10px",flexDirection:"column"})}`;

const ImgContainer = styled.div`
flex:1;`;

const Image = styled.img`
width:100%
hieght:90vh;
object-fit:cover; 
${mobile({height:"40vh"})}`;

const InfoContainer=styled.div`
flex:1;
padding:0px 50px;
${mobile({padding:"10px"})}`;


const Title = styled.h1`
font-weight:200;`;

const Desc = styled.p`
margin:20px 0px;`;

const Price = styled.span `
font-width:100;
font-size:40px;`;


 

const AddContainer = styled.div`
width:50%
display:flex;
align-items:center;
justify-content:space-between;
${mobile({width:"100%"})}`;
const AmountContainer =styled.div`
display:flex;
align-items:center;
font-weigth:700;`;
const Amount = styled.span`
width:30px;
height:30px;
border: 1px;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;`;
const Button = styled.button`
padding:15px;
border:2px;
cursor:pointer;
font-weight:500;`;


 
const Product = () => {
    const location=useLocation();
    const id=location.pathname.split("/")[2]
    const [product,setProduct]=useState({});
    const [quantity,setQuantity]=useState(1);
    const dispatch=useDispatch()

    useEffect(()=>{
        const getProduct=async()=>
        {
            try{
                const res=await publicRequest.get("/products/find/"+id)
                setProduct(res.data);
            }
            catch{}
        };
        getProduct()
    },[id])


    const handleQuantity=(type)=>{
        if(type=="dec"){
           quantity>1 && setQuantity(quantity-1);
        }else{
            setQuantity(quantity+1);
        }

    };

    const handleClick=()=>{
        dispatch(addProduct({...product,quantity}))
    };

  
    return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
        <ImgContainer>
            <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>${product.price}</Price>
        </InfoContainer>
        <AddContainer>
            <AmountContainer>
            <Remove onClick={()=>handleQuantity("dec")}/>
            <Amount>{quantity}</Amount>
            <Add onClick={()=>handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
        </AddContainer>
        
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Product
