import React from "react";
import {useHistory} from "react-router-dom"

export default function Decks({data,setDeckNumber}){
    
    const history = useHistory();



  const decks =  data.map((deck,index)=>{
    function Study(){
        history.push(`/decks/${deck.id}/study`)
        setDeckNumber(deck.id)
    }
    
    return (
            <div key = {index}>
                <div>
                    <h3>{deck.name}</h3>
                    <p> number of cards! </p>
                </div>
                <div>
                    <p>{deck.description}</p>
                </div>
                <div>
                    <button>View</button>
                    <button onClick={Study}>Study</button>
                    <button>Delete</button>
                </div>
            </div>
        )
    })

    return (
        <div>
            <button>Create Deck</button>
            {decks}
        </div>
    )
}