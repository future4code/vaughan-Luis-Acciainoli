import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  font-size:20px;
  font-weight: 600;
`

const Input = styled.input`
  width: 85%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding-left: 15px;

`


const Button = styled.button`
  width: 60px;
  height: 100%;
  border: none;
  outline: none;
  background: #f07f47;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  border-radius: 3px;
  margin-left: 5px;
`


const Tarefa = styled.li`
  list-style: none;
  height:45px;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  line-height:45px;
  position: relative;
  background: #f2f2f2;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 0 15px;

`

const InputsContainer = styled.div`
  display: flex;
  height: 45px;
  width: 100%
  margin: 20px 0;
  `
  const InputsContainer2 = styled.div`
  display: flex;
  height: 45px;
  width: 100%
  margin: 20px 0;
  `

  const Label = styled.label`
  display: flex;
  margin-right: 20px;
  margin-top:10px;
  font-size: 20px;
  `

  const Select = styled.select`
  display: flex;
  border-radius: 5px;
  font-weight: bold;
  `




class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(), // Explicação abaixo
        texto: '',
        completa: false // Indica se a tarefa está completa (true ou false)
      }],
      inputValue: '',
      filtro: ''
    }


    
    
  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (event) => {

  }

  criaTarefa = () => {

  }

  selectTarefa = (id) => {

  }

  onChangeFilter = (event) => {

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <Input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <Button onClick={this.criaTarefa}>+</Button>
        </InputsContainer>
        <br/>

       

        <InputsContainer2>
          <Label>Filtro</Label>
          <Select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </Select>
        </InputsContainer2>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
