import React from "react";
import {useState, useEffect} from "react"
import {Route} from "react-router-dom";
import Layout from "./Layout";
import {listDecks} from "./utils/api"
import { readDeck } from "./utils/api";


function App() {

  const [decks,setDecks] = useState([]) 
  const [deckInfo,setDeckInfo] = useState({})
  const [deckNumber,setDeckNumber] = useState(1)
  const [flip,setFlip] = useState(false)


  useEffect(()=>{
    async function loadData(){
    listDecks().then((response)=>setDecks(response))

    }
    loadData()
  },[])


  useEffect(() => {

    async function loadData(){
      console.log(deckNumber)
        readDeck(deckNumber).then((response)=> setDeckInfo(response))
    }
    loadData();
    return ()=>{
    }
  }, [deckNumber])



  return (
    <div className="app-routes">


        <Route path="/">
          <Layout data={decks} setDecks={setDecks} setDeckInfo={setDeckInfo} deckInfo={deckInfo} setDeckNumber={setDeckNumber} flip={flip} setFlip={setFlip}/>
        </Route>
      
    </div>
  );
}

export default App;
