import DesignSemNomeImage from '/Design sem nome (5).png';

export default function Tarefas(props) {

  function excluirTarefa(i) {
    props.setTarefa(props.tarefas.filter((_, index) => index !== i));
  }

  function checkConcluido(i) {
    props.setTarefa(props.tarefas.map((arr, index) => {
      if (index === i) {
        return {
          ...arr,
          concluido: !arr.concluido
        };
      } else {
        return arr;
      }
    }));
  }

  return (
    <section key={props.index} className={props.arr.concluido ? 'concluido' : ''} >
      <span>{props.index + 1 + "-" + props.arr.work}</span>
      <div className="content">
        <input id='check' type="checkbox" onChange={() => checkConcluido(props.index)} />
        <img className='lixo' src={DesignSemNomeImage} alt="" onClick={() => excluirTarefa(props.index)} />
      </div>
    </section>
  )
}