import { Facebook, FacebookIcon, Instagram, InstagramIcon, MailOutline, Phone, Room} from '@mui/icons-material';
import React from 'react';

import styled from "styled-components";
import { mobile } from '../responsive';

const Container=styled.div`
display:flex;
${mobile({flexDirection:"column"})}`;
const Left=styled.div`
flex:1;
dispaly:flex;
flex-direction:column;
padding:20px;
`;
const Logo=styled.h1``;
const Desc=styled.p`
margin:20px 0px;`;
const Social=styled.div`
display:flex;
`;
const SocialIcon=styled.h1`
width:40px;
height:40px;
align-items:center;
justify-content:center;`;



const Right=styled.div`
flex:1;
padding:20px;
${mobile({backgroundColor:"lightgray"})};`;


const Center=styled.div`
flex:1;
padding=20px;
${mobile({display:"none"})}`;

const Title=styled.h3`
margin-bottom:30px;

`;

const List = styled.ul`
margin:0px;
padding:0px;
list-style:none;
display:flex;
flex-wrap:wrap;`;

const ListItem = styled.li`
width:50%;
margin-bottom:10px;
`;

const ContactItem=styled.div`
margin-bottom:20px;
dispaly:flex;
align-text:center;
justify-content:center;`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Storecart</Logo>
            <Desc>Brings you closer</Desc>
            <Social>
                <SocialIcon>
                    <Facebook/>
                </SocialIcon>

                <SocialIcon>
                <Instagram/>
                </SocialIcon>
            
                
            </Social>
        </Left>
        <Center>
            <Title>Links</Title>
            <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
               <Room/> brampton,On
            </ContactItem>
            <ContactItem>
               <Phone/> +1 (234)567-8901
            </ContactItem>
            <ContactItem>
                <MailOutline/> abc@gmail.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer
