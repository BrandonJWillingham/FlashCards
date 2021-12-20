import React from "react";
import {useState, useEffect} from "react"
import {Route, Switch} from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./Layout/NotFound"
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

      <Switch>

        <Route path="/">
          <Layout data={decks} setDeckInfo={setDeckInfo} deckInfo={deckInfo} setDeckNumber={setDeckNumber} flip={flip} setFlip={setFlip}/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
