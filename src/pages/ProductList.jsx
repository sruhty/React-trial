
import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements';
import Products from '../components/Products'
import Footer from '../components/Footer'
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';

const Container=styled.div``;

const Title = styled.h1`
margin:20px;`;

const FilterContainer = styled.div`
display:flex;
justify-content:space-between;`;

const Filter = styled.div`
margin:20px;
${mobile({width:"0px 20px",dispaly:"flex",flexDirection:"column"})}`;

const FilterText=styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
${mobile({marginRight:"0px"})}`;

const Select=styled.select`
padding:10px;
margin-right:20px;
${mobile({margin:"10px 0px"})}`;
const Option=styled.option``;
const ProductList = () => {
    const location=useLocation();
    const cat=location.pathname.split("/")[2]
    const [filters,setFilters]=useState({})
    const [sort,setSort]=useState("newest")

    const handleFilters=(e)=>{
        const value=e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value,
        });
    };
    

      
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText> Filter Products:</FilterText>
                <Select  name="beverage" onChange={handleFilters}>
                    <Option disabled selected>
                        beverage
                    </Option>
                        <Option>Tea</Option>
                        <Option>Cofee</Option>
                        <Option>Juices</Option>
                        
                </Select>
                
            </Filter>
            <Filter><FilterText>Sort Products:</FilterText>
            <Select onChange={e=>setSort(e.target.value)}>
                <Option value="newest" >Newest</Option>
                <Option value="asc">Price (asc)</Option>
                <Option value="desc">Price (desc)</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Footer/>
    </Container>
  )
}


export default ProductList
