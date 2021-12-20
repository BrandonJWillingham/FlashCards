import React,{useState} from "react";


export function Cards ({data, flip,setFlip}){
    console.log(data)
    let id = 4

    const returning = data.map((card,index)=>{
        function flipping(){
            setFlip(!flip)
            }
        return (
            <div key ={index}>
                <div>
                    Card {index+1} of {data.length}
                </div>
                {flip ? (<div>{card.front}</div>) :(<div>{card.back}</div>)}
                <button onClick={flipping()}>Flip</button>
            </div>
        )
    })
    return returning
    return 2
}