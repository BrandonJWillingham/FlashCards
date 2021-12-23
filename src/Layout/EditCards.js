import React, {useState,useEffect} from "react";
import { useParams,useHistory } from "react-router-dom";
import { readDeck, readCard,updateCard } from "../utils/api";

export default function EditCards(){

    const [card,setCard ]= useState({})
    const  [deck, setDeck] = useState({})

    const params = useParams()
    const history = useHistory()

    useEffect(()=>{

        async function loadData(){
            readDeck(params.deckId).then((response)=>setDeck(response))
        }

        loadData()

    },[params])

    useEffect(()=>{

        async function loadData(){
            readCard(params.cardId).then((response)=>setCard(response))
        }

        loadData()

    },[params])

    function handleChange({target}){
        setCard({
            ...card,
            [target.name] : target.value
        })
    }

    function handleDone(){
        history.push(`/decks/${params.deckId}`)
    }

    function handleSave(){
        updateCard(card)
    }


    return (
        <div>
            
            <div>
                <a href={"/"}> Home </a><a>/ {deck.name} </a> <a>/ Edit Card {card.id}</a>
            </div>


            <h2>
                Edit Cards
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