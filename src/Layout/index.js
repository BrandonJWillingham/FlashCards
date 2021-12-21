import React from "react";
import { Switch,Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Decks from "./Decks"
import Study from "./Study";

function Layout({data,setDeckInfo,deckInfo,setDeckNumber, setFlip, flip}) {

  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path = "/">
            <Decks data={data} setDeckNumber={setDeckNumber} cards={deckInfo.cards}/>
          </Route>
          
          <Route path = "/decks/:deckId/study">
          <Study data={deckInfo} setData={setDeckInfo} setFlip={setFlip} flip={flip}/>
          </Route>

          <NotFound />
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
