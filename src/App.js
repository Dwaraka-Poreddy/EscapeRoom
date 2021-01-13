import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import PuzzlePage from "./PuzzlePage";
import VioletPage from "./VioletPage";
export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={PuzzlePage} />
        <Route exact path="/violetpage" component={VioletPage} />
      </Switch>
    </div>
  );
}
