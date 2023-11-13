import { useState } from 'react'
import styles from './button.module.css'

export default function MeuContador(){

  const [contador, setContador] = useState(0)
  
// função para aumentar.
  function aumentar(){
    setContador(contador + 1)
  }
// implementado button para diminuir.
  function diminuir(){
    setContador(contador - 1)
  }

  return (
    <div className='conteiner'>
      <h1>Meu Contador</h1>
      <h3>{contador}</h3>
      <button className={styles.myButton} onClick={aumentar}>Aumentar</button>
      <button className={styles.myButton} onClick={diminuir}>Diminuir</button>
    </div>
  )
}