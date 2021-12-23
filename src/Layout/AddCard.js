import React,{useEffect, useState} from "react";
import { useParams,useHistory } from "react-router-dom";
import { readDeck,createCard} from "../utils/api";

export default function AddCard(){

    const deckInitialization = {
        cards : [1,2,3]
    }

    const history = useHistory()

    const [deck,setDeck] = useState(deckInitialization)
    const {deckId} = useParams();

    useEffect(()=>{

        function loadDeck(){
            readDeck(deckId).then((response)=>setDeck(response))
        }

        loadDeck()
    },[deckId])
    

    const initialization = {
        id: deck.cards.length + 10,
        deckId: deckId,
        front: "",
        back: "",
    }
        const [card,setCard] = useState(initialization)


    function handleChange({target}){
        setCard({
            ...card,
            [target.name]: target.value
        })
    }

    function handleDone(){
        history.push(`/decks/${deckId}`)
    }

    function handleSave(){
        createCard(deckId,card)
    }

    return (
        <div>

            <div>
                <a href={"/"}> Home </a><a>/ {deck.name} </a> <a>/ Add Card </a>
            </div>

            <h2>
                <p>
                    {deck.name}
                </p>
                <p>
                    Add Card
                </p>
            </h2>


            <div>
                <form>
                    <div>
                        <label htmlFor="front">
                            <div>
                                Front: 
                            </div>
                            <textarea
                                value ={card.front}
                                name = "front"
                                id = "front"
                                onChange = {handleChange}
                            />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="back">
                            <div>
                                Back:
                            </div>
                            <textarea
                                value = {card.back}
                                name = "back"
                                id = "back"
                                onChange = {handleChange}
                            />
                        </label>
                    </div>
                </form>

                <div>
                    <button onClick={handleDone}>
                        Done
                    </button>

                    <button onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )

}