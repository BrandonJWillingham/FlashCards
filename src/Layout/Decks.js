import React from "react";
import {useHistory} from "react-router-dom"
import { deleteDeck } from "../utils/api";


export default function Decks({data,setDeckNumber}){
    
    const history = useHistory();



  const decks =  data.map((deck,index)=>{
        function Study(){
            history.push(`/decks/${deck.id}/study`)
            setDeckNumber(deck.id)
        }

        function deleting(){
            if(window.confirm("Restart Cards?")){
                deleteDeck(deck.id)
                window.location.reload(true)
            }
        }

        function View(){
            history.push(`/decks/${deck.id}`)
        }
        
        return (
                <div key = {index}>
                    <div>
                        <h3>{deck.name}</h3>
                        <p> {deck.cards.length} cards </p>
                    </div>
                    <div>
                        <p>{deck.description}</p>
                    </div>
                    <div>
                        <button onClick={View} >View</button>
                        <button onClick={Study}>Study</button>
                        <button onClick={deleting}>Delete</button>
                    </div>
                </div>
            )
    })

    return (
        <div>
            <button onClick={()=>history.push("/decks/new")}>Create Deck</button>
            {decks}
        </div>
    )
}