

export default function AddWork(props) {

  function addTarefa(ev) {
    if (props.work === "") {
      return alert("Preencha o Input com a tarefa")
    } else {
      ev.preventDefault();
      props.setTarefa([...props.tarefas, { work: props.work }]);
      props.setWork("")
    }

  }
  return (
    <div className="addTarefa">
      <input
        className="inputText"
        type="text"
        placeholder='Digite sua tarefa'
        value={props.work}
        onChange={(ev) => props.setWork(ev.target.value)}
      />
      <button onClick={addTarefa}>Adicionar</button>
    </div>
  )
}