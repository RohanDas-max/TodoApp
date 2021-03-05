import React, {useReducer} from 'react'
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {TodoContext} from '../src/Context/TodoContext';
import todoReducer from "./Context/reducer"; 
import TodoForm from './Comps/Form';
import Todo from './Comps/Todo';


const App= ()  => {
 
  const [todos, dispatch] = useReducer(todoReducer,[])

  return (
    <TodoContext.Provider value={{todos, dispatch}}>
        <Container fluid>
            <h1>Todo App</h1>   
            <Todo/>
            <TodoForm/>
            
        </Container>
    </TodoContext.Provider>
  )
}

export default App;