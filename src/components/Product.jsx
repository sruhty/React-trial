import React from 'react';
import styled from "styled-components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Infn=styled.div`
   width:100%;
   height:100%;
   position:absolute;
   top:0;
   left:0;
   display:flex;
   align-items:right;
   justify-content:center;

`;

const Container=styled.div`
   flex:1;
   margin:5px; 
   min-width:280px;
   height:450px;
   display:flex;
   align-items:center;
   justify-content:center;
   position:relative;
`;


const Image=styled.img`
height:75%;
`;



const Icon=styled.div`

`;

const Link=styled.a``;

const Product = ({item}) => {
  return (
    <Container>
        
        <Image src={item.img}/>
        <Infn>
            <Icon>
                <ShoppingBasketIcon/>
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`}>
                <SearchIcon/>
                </Link>
                
            </Icon>
            <Icon>
                <FavoriteBorderIcon/>
            </Icon>
        </Infn>
    </Container>
  )
}
export default Product