import React,{useEffect, useState} from "react";
import { useParams,useHistory } from "react-router-dom";
import { readDeck,updateDeck } from "../utils/api";

export default function EditDeck(){

    const history = useHistory()
    const [deck,setDeck] = useState({})
    const {deckId} = useParams();


    useEffect(()=>{
        
        async function loadData(){
            readDeck(deckId).then((response)=>setDeck(response))
        }

        loadData();
    }, [])

    function handleChange({target}){
        setDeck({
            ...deck,
            [target.name]: target.value,
        })
    }
    
    function handleSave (){
        updateDeck(deck)
    }

    function handleDone(){
        history.push(`/decks/${deckId}`)
    }

    return (
        <div>
            <div>
                <a href={"/"}> Home </a><a>/ {deck.name} </a>
            </div>

            <h2>
                Edit Deck
            </h2>

            <form>
                <div>
                    <label htmlFor="name">
                        <div>
                            Name
                        </div>

                        <div>
                            <textarea 
                            value = {deck.name}
                            name = "name"
                            id = "name"
                            onChange = {handleChange}
                            />
                        </div>
                    </label>
                </div>

                <div>
                    <label>
                        <div>
                            Description
                        </div>

                        <textarea
                        value = {deck.description}
                        name = "description"
                        id = "description"
                        onChange = {handleChange}
                        />

                    </label>
                </div>
            </form>

            <div>
                <button onClick={handleDone}>Done</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}