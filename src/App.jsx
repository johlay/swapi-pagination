import { BrowserRouter, Route, Switch } from "react-router-dom";
import APIContext from "./contexts/APIContext";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <APIContext>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </APIContext>
    </div>
  );
}

export default App;
