import React from "react";
import { Switch,Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Decks from "./Decks"
import Study from "./Study";
import New from "./New";
import DeckInfoComp from "./DeckInfoComp";
import EditCards from "./EditCards";
import EditDeck from "./EditDeck";
import AddCard from "./AddCard";


function Layout({data}) {

  return (
    <div >
      <Header />
      <div className="container">

        <Switch>
          <Route exact path = "/">
            <Decks data={data}/>
          </Route>
          
          <Route exact path = "/decks/:deckId/study">
          <Study />
          </Route>

          <Route exact path="/decks/new">
            <New data={data}/>
          </Route>

          <Route exact path = "/decks/:deckId/cards/:cardId/edit">
            <EditCards/>
          </Route>

          <Route exact path ="/decks/:deckId/cards/new">
            <AddCard/>
          </Route>

          <Route exact path="/decks/:deckId">
            <DeckInfoComp/>
          </Route>

          <Route exact path="/decks/:deckId/edit">
            <EditDeck/>
          </Route>

          <NotFound />
        </Switch>

      </div>
    </div>
  );
}

export default Layout;
