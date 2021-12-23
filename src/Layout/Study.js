import React, {useEffect, useState} from "react";
import {useParams,useHistory} from "react-router-dom"
import { readDeck } from "../utils/api";
import { Cards } from "./Cards";

export default function Study(){

    const initialization = {
        cards : [1,2]
    }

    const history = useHistory()
    const {deckId} = useParams()
    const [flip, setFlip] = useState(false)
    const [deck,setDeck] = useState(initialization)

    useEffect(() => {

      

        async function loadData(){
            readDeck(deckId).then((response)=> setDeck(response))
        }
        loadData();
        return ()=>{
        }
    }, [deckId])
    
    function handleAddCards(){
        history.push(`/decks/${deckId}/cards/new`)
    }

    return(
        <div>
            <div><a href={"/"}>Home </a><a>/ {deck.name} </a><a>/ Study</a></div>
            <h2> <p>{deck.name}</p></h2>
            {deck.cards.length >= 3? <Cards data={deck.cards} setFlip={setFlip} flip={flip}/> :(
                <div>
                    <h3>Not Enough Cards</h3>
                    <p>you need atleast 3 cards to study. There are {deck.cards.length} in this deck</p>
                    <button onClick={handleAddCards}>Add Cards</button>
                </div>
            ) }

        </div>
    )
}