import React,{ Component } from "react";
import Product from "./product";
export default class Home extends Component
{
    constructor(){
        super();
        this.state=
        {products:[],
        };
    }

    render()
    {
        return (
        <div className="row">{
            this.state.products.map((prod)=>{
                return <Product key={prod.id} 
                product={prod}></Product>})}

            <table className="table">
            <thead>
            <tr>
            <th>#</th>
            <th> </th>
            <th>Product Name </th>
            <th>Description</th>
            <th>Price</th>            
            </tr>
            </thead>
            <tbody>
                {this.getProductRow()}
            </ tbody > 
            </ table >
    
        </div>);
    }
    componentDidMount=async()=>
    {
        var response = await fetch("http://localhost:5000/products",{method:"GET"});   
        var prods= await response.json();
        this.setState({products:prods});
        console.log(response);   
    };
    


    getProductRow=()=>{
        return this.state.products.map((prod)=>{return( 
                <tr key={prod.id}>
                    <td>{prod.id}</td>
                    <td><img src={prod.images}/></td>
                    <td> {prod.productName}  </td>
                    <td> {prod.description} </td>
                    <td> {prod.price}   </td>
                
                </tr>);
                }
                )}
        
    
}