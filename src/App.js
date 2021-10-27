import { BrowserRouter, Route } from "react-router-dom"
import './App.css';
import Contain from './component/Contain';
import MoviePage from "./component/MoviePage";

function App() {
  return (
    <>
  
    <BrowserRouter> 
    <div className="App">
   
      <Route path="/" component={Contain} exact/>
      <Route path="/movie/:id" component={MoviePage}/>
   
    </div>
    </BrowserRouter> 
   
    </>
  );
}

export default App;
