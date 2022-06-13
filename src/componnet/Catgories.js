import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Categories(){
    const [categories, setCategories] = useState([])

    useEffect(()=> {
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(data=>setCategories(data))},[])

    if(!categories.length) return <h2>loading...</h2>
    return <>
    <div className="catList">
         {categories.map(cat=>{
            return (<Link to = {"/items/" + cat}><div className="cat">{cat}</div></Link>)})}
    </div></>
    }