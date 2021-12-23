import React, {useState} from "react";
import { Link, useHistory} from "react-router-dom";
import Decks from "./Decks";
import { createDeck } from "../utils/api";

export default function New({data}){



    const initalState = {
        id : data.length,
        name : "",
        description : ""
    }

    const [newDeck,setNewDeck] = useState({...initalState})
    
    const history = useHistory()


    function handleChange({target}){
        setNewDeck({
            ...newDeck,
            [target.name] : target.value,
        });
    }

    function submit(){
        createDeck(newDeck)
        setNewDeck(initalState)
        history.push(`/decks/${data.id}`)

    }

    return(
        <div>
            <div>
                <a href={"/"}> Home </a><a>/ Create Deck </a>
            </div>
            <h2>
                Create Deck
            </h2>
            <form>
                <div>
                    <label htmlFor="name">
                        <div>
                            Name:
                        </div>
                        <input id="name" type="text" name="name" onChange={handleChange} value ={newDeck.name} placeholder="Deck Name"/>
                    </label>
                </div>

                <div>
                    <label htmlFor="description">
                        <div>
                            Description:
                        </div>
                        <textarea id="description" name="description" onChange={handleChange} value={newDeck.description} placeholder="Brief description of app" />
                    </label>
                </div>
            </form>
            <button>
                Cancel
            </button>
            <button onClick={submit}>
                Save
            </button>
        </div>
    )
}