import { Counter } from '../Counter';
import './style.css'
import { SmartCounter } from '../SmartCounter';
import { IfoodCounter } from '../IfoodCounter';

export default function App() {
  return (
    <>
    <div className='container'>
      <h1>Contador Aula de Hooks</h1>
      <p>Aula pratica usandos hooks do reactJS, Os hooks são funções q funcionam como um gancho ao um componente, sendo execultado junto ao componente</p>
      <p>____________________________________________________________</p>
      <Counter/>
      <p>____________________________________________________________</p>
      <SmartCounter/>
      <p>____________________________________________________________</p>
      <IfoodCounter/>
      <p>____________________________________________________________</p>

    </div>
    </>
  );
}


