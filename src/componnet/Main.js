import { useState, useEffect } from "react";
import { Route, Routes} from "react-router-dom"
import Categories from "./Catgories";
import Item from "./Item";
import Items from "./Items";

export default function Main(){
    // const params = useParams() // לא נותנים לה כלום, רק מחזירה
    
    
    // const links = [
    //     { n: "Garden", link: "Garden" },
    //     { n: "Home Styling", link: "Home Styling" },
    //     { n: "Jewlery", link: "Jewlery" },
    //   ];
    const [items, setItems] = useState();

    return(
        <div>
            <Routes>
            <Route path="/" element= {<Categories/>}></Route>
                <Route path="/home" element= {<Categories/>}></Route>
                <Route path="/items/:cat" element= {<Items products = {{items,setItems}}></Items>}></Route>
                <Route path="/item/:id" element= {<Item products = {{items,setItems}}></Item>}></Route>
            </Routes>
        </div>
    )
}