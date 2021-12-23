import React, {useEffect, useState} from "react";
import { useParams,useHistory } from "react-router-dom";
import { readDeck, deleteCard, deleteDeck } from "../utils/api";


export default function DeckInfoComp (){

    const initialization = {
        deck: [],
        cards: [1,2,3],
    }

    const [deckInfo,setDeckInfo] = useState(initialization)


    const {deckId} = useParams()
    const history = useHistory()

    function handleStudy(){
        history.push(`/decks/${deckId}/study`)
    }

    function handleEditDeck(){
        history.push(`/decks/${deckId}/edit`)
    }

    function handleDeleteDeck(){
        if(window.confirm("Delete this deck?")){
            deleteDeck(deckId)
            history.push("/")
        }
    }

    function handleAddCard(){
        history.push(`/decks/${deckId}/cards/new`)
    }

    useEffect(()=>{

        async function loadData(){
            const response = await readDeck(deckId)
            setDeckInfo(response)
            
        }

        loadData()
        
    },[deckId])

    const cardsMap = deckInfo.cards.map((card,index)=>{

        function handleEdit(){
            history.push(`/decks/${card.deckId}/cards/${card.id}/edit`)
        }

        function handleDelete(){
            if(window.confirm("Delete this Card?")){
                deleteCard(card.id)
                window.location.reload(true)
            }

        }

        return(
            <div key = {index}>
                <div>
                  <p>  {card.front} </p>
                   <p> {card.back} </p>
                </div>
                <div>
                    <button onClick={handleEdit}>
                        Edit
                    </button>
                    <button onClick={handleDelete}>
                        delete
                    </button>
                </div>
                <hr/>
            </div>
        )

    })

    if (deckInfo.cards[0] == 1) return "Loading";

    return (
        deckInfo ? (
        
        <div>

             <div>
                <a href={"/"}> Home </a><a>/ {deckInfo.name} </a>
            </div>

            <div>
                <h3>
                    {deckInfo.name}
                </h3>

                <div>
                    {deckInfo.description}
                </div>

                <div>

                    <button onClick={handleEditDeck}>
                        Edit
                    </button>

                    <button onClick={handleStudy}>
                        Study
                    </button>

                    <button onClick={handleAddCard}>
                        Add Cards
                    </button>

                    <button onClick={handleDeleteDeck}>
                        Delete
                    </button>

                </div>

                <div>
                    <h2>
                        Cards
                    </h2>

                    <div>
                        {cardsMap}
                    </div>
                </div>
            </div>

        </div>) : (
        <div>
            Loading...
        </div>
        )
    )
}