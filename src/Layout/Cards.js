import React,{useState} from "react";
import {useHistory} from "react-router-dom"

export function Cards ({data, flip,setFlip}){

    const [currentCard,setCurrentCard] = useState(0)
    const history = useHistory()

    function flipping(){
    setFlip(!flip)
    }
    
    
    function next(){

        if (currentCard === data.length - 1) if(!window.confirm("Restart Cards?")){
            history.push("/")
        }
    
        setFlip(false)
        setCurrentCard(currentCard+1)
        setCurrentCard((currentCard)=> Math.min(currentCard,data.length-1))

        
        if (currentCard === data.length - 1) setCurrentCard(0)
    }

    const returning = data.map((card,index)=>{

        return (
            <div key ={index}> 
                <div>
                    Card {index+1} of {data.length} 
                </div>
                {flip ? (<div>{card.front}</div>) :(<div>{card.back}</div>)} 
                <button onClick={()=>flipping()}>Flip</button>
                {flip && <button onClick={()=> next() }>Next</button>}
            </div>
        )
    })

    return returning[currentCard]
}