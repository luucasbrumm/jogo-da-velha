// import React, { useState, useEffect } from "react";
// import ButtonCustom from "./components/ButtonCustom";

//   function App() {

//   const [tarefas, setTarefas] = useState([
//     'Ir para casa',
//     'Dormir até tarde',
//     'Ir para faculdade'
//   ])

//   const [input, setInput] = useState('ir pra casa')

//   function adcicionar(){ 
//     setTarefas([...tarefas], input)
//     console.log(tarefas)
//   }

//   return (
//     <div>
//       {tarefas.map((tarefa) => (
//       <div key={tarefa}>
//         <a>
//           {tarefa}
//         </a>
//       </div>
//     ))}
//     <input onChange= {((e) => setInput(e.target.value))}></input>
//     <button onClick={adcicionar}>Adicionar</button>
//     </div>
//   )
// }

// export default App;

import React, { useState, useEffect } from "react";
import ButtonCustom from "./components/ButtonCustom";

function App() {

  const [botoes1, setBotoes1] = useState([
    { id: 1, nome: 'Botão 1', color: 'white'},
    { id: 2, nome: 'Botão 2', color: 'white'},
    { id: 3, nome: 'Botão 3', color: 'white'}
  ])
  const [botoes2, setBotoes2] = useState([
    { id: 4, nome: 'Botão 4', color: 'white'},
    { id: 5, nome: 'Botão 5', color: 'white'},
    { id: 6, nome: 'Botão 6', color: 'white'}
  ])
  const [botoes3, setBotoes3] = useState([
    { id: 7, nome: 'Botão 7', color: 'white'},
    { id: 8, nome: 'Botão 8', color: 'white'},
    { id: 9, nome: 'Botão 9', color: 'white'}
  ])

  const [clicou, setClicou] = useState('')
  
  const [jogadas1, setJogadas1] = useState([])
  
  const [jogadas2, setJogadas2] = useState([])
  
  const [vez, setVez] = useState(true)

  const jogadasGanhador = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ]
  
//   useEffect(() => {
//     ganhou()
// }, [jogadas1, jogadas2])

  function click(id, grupo) {
    if(grupo === 1) {
      const botoes1Aux = botoes1;
      const indice1 = botoes1Aux.findIndex( (posicao) => posicao.id === id)
      if(vez) {
        botoes1Aux[indice1].color = 'blue'
      } else {
        botoes1Aux[indice1].color = 'red'
      }
      setBotoes1([...botoes1Aux])

    } else if (grupo === 2) {
      const botoes2Aux = botoes2
      const indice2 = botoes2Aux.findIndex( (posicao) => posicao.id === id)
      if(vez){
        botoes2Aux[indice2].color = 'blue'
      } else {
        botoes2Aux[indice2].color = 'red'
      }
      setBotoes2([...botoes2Aux])
    } else {
      const botoes3Aux = botoes3
      const indice3 = botoes3Aux.findIndex( (posicao) => posicao.id === id)
      if(vez){
        botoes3Aux[indice3].color =  'blue'
      } else {
        botoes3Aux[indice3].color =  'red'
      }
      setBotoes3([...botoes3Aux])
    }


    if(vez){
      setJogadas1([...jogadas1, id].sort())
    } else {
      setJogadas2([...jogadas2, id].sort())
    }
    setVez(!vez)
    
    // console.log(jogadas1)
    // console.log(jogadas2)
  }

  function ganhou(){

    let vencedor = ''

    jogadasGanhador.forEach((posicao) => {
        if(posicao.every((valor) => jogadas1.includes(valor))) {
            vencedor = 'AZUL'
            alert('vencedor = ' + vencedor)
        }
    })

    jogadasGanhador.forEach((posicao) => {
        if(jogadas1.every((valor) => jogadas2.includes(valor))) {
            vencedor = 'vermelho'
            alert('vencedor = ' + vencedor)
        }
    })

  }

    return (
      <div>
        {botoes1.map((botao) => (
          <button 
            key={botao.id} 
            onClick={() => click(botao.id, 1)}
            style={{ backgroundColor:botao.color }}
            >
              {botao.nome}
        </button>
        ))}
        <br/>
        <br/>

        {botoes2.map((botao) => (
          <button 
            key={botao.id} 
            onClick={() => click(botao.id, 2)}
            style={{ backgroundColor:botao.color }}
            >
              {botao.nome}
        </button>
        ))}
        <br/>
        <br/>

        {botoes3.map((botao) => (
          <button 
            key={botao.id} 
            onClick={() => click(botao.id, 3)}
            style={{ backgroundColor:botao.color }}
            >
              {botao.nome}
        </button>
        ))}

        <br/><br/>

        Array jogadas1: {`${jogadas1}`}
        <br/>
        Array jogadas2: {`${jogadas2}`}

        <button style={{
        display:"flex",
        
        justifyContent:"center",  
        marginTop: 20
        }}>
          botao
        </button>

      </div>
    )
}

export default App;
