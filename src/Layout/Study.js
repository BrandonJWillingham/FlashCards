import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom"
// import { useParams} from "react-router-dom";
// import { readDeck } from "../utils/api";
import { Cards } from "./Cards";

export default function Study({data,setFlip,flip}){

    
   


    return(
        <div>
            <div><Link to={"/"}>Home </Link><Link>/ {data.name} </Link><Link>/ Study</Link></div>
            <h2> Study: {data.name}</h2>
            {data && <Cards data={data.cards} setFlip={setFlip} flip={flip}/>}
        </div>
    )
}