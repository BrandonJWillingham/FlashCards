import React, {useEffect, useState} from "react";
// import { useParams} from "react-router-dom";
// import { readDeck } from "../utils/api";
import { Cards } from "./Cards";

export default function Study({data,setFlip,flip}){

   


    return(
        <div>
            <h2> Study: {data.name}</h2>
            <Cards data={data.cards} setFlip={setFlip} flip={flip}/>
        </div>
    )
}