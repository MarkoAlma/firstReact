import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Counter } from "./components/counter";
import { Toggle } from "./components/Toggle";
import { Todo } from "./components/Todo";
import { Gallery } from "./components/Gallery";

function App() {

  const [selected, setSelected] = useState(null)

  return (
    <>
      <div className="app">
        <h1 style={{textAlign:"center"}}>fut</h1>
        <div className="d-flex gap-2">
          <Button onClick={()=>setSelected('Counter')} color="primary" outline={selected!='Counter'}>
            Counter
          </Button>{" "}
          <Button onClick={()=>setSelected('Toggle')} outline={selected!='Toggle'}>Toggle</Button>{" "}
          <Button onClick={()=>setSelected('Todo')} color="success" outline={selected!='Todo'}>
            Todo
          </Button>{" "}
          <Button onClick={()=>setSelected('Gallery')} color="primary" outline={selected!='Gallery'}>
            Gallery
          </Button>{" "}
        </div>
        {selected == 'Counter' && <Counter/>}
        {selected == 'Toggle' && <Toggle/>}
        {selected == 'Todo' && <Todo/>}
        {selected == 'Gallery' && <Gallery/>}


        
        
      </div>
    </>
  );
}

export default App;
