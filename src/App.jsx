import { useState } from 'react';


import AddWork from './Components/AddWork';
import Tarefas from './Components/Tarefas';
function App() {
  const [tarefas, setTarefa] = useState([]);
  const [work, setWork] = useState("");

  return (
    <div className="container">
      <h1>Todo List</h1>
      <AddWork work={work} setWork={setWork} tarefas={tarefas} setTarefa={setTarefa} />
      <div className='works'>
        {tarefas.map((arr, index) => <Tarefas arr={arr} index={index} tarefas={tarefas} setTarefa={setTarefa} />)}
      </div>
    </div>
  );
}
export default App;
