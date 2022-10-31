import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Search from './SearchFilter/Search';
import Counter from './Simple counter/Counter';
import DisplayList from "./Display a list in React/DisplayList"
import Accordion from './Build Accordion in React/Accordion';
import CheckList from './Create a Checklist in React/Checklist';
import Login from './simpleLogin/Login';
import Hello from './simpleLogin/hello';
import PrintData from './PrintData/PrintData';
import Slide from './slide/Slide';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search/>
        <Counter/>
        <DisplayList/>
        <Accordion/>
        <CheckList/>
        <Login/>
        <Routes>
          <Route path='/hello' element={<Hello/>}/>
        </Routes>
        <PrintData/>
        <Slide/>
      </BrowserRouter>

    </div>
  );
}

export default App;
