import React, { useState } from "react"
import "./shopList.css"

const InputFilterForm = ({name,id,handleDelete}) => {
    return (
        <div className="filterContainer">
            <div className="fcf">
                <div>{id}.</div>
                <div className="filterText">{name}</div>
            </div>
            <div className="deleteCss" onClick={() => handleDelete(id)}>Delete</div>
        </div>
    )
}
function ShopList () {
    const[list,setList] = useState([]);
    
    const[iValue,setIValue] = useState("");
    
    const valueAdd = (event) => {
        setIValue(event.target.value);
    }
    
    const handleClick = () => {
        const id = list.length? list[list.length -1].id + 1: 1;
        setList([...list,{id: id, name: iValue}]);
    }

    const handleDelete = (id) => {
        const lists = list.filter(product => product.id !== id);
        setList([...lists]);
        console.log(list);
    }

    return (
        <div className="shopContainer">
            <div className="shopTitle">Food Store</div>
            <div className="inputParent">
                <input type="text" placeholder="Enter product name" className="input" onChange={valueAdd}/>
                <button className="shopButton" onClick={handleClick}>Order</button>
            </div>
            {list.map(product => <InputFilterForm key = {product.id} name = {product.name} id = {product.id} handleDelete = {handleDelete} />)}
        </div>
    )
}

export default ShopList;