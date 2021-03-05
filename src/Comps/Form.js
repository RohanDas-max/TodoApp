import React, { useContext, useState } from 'react';
import {Input,Button,Form,InputGroup,InputGroupAddon} from 'reactstrap';

import {v4} from 'uuid';
import {TodoContext} from '../Context/TodoContext';
import {ADD_TODO} from '../Context/action.types'


const TodoForm = () => {
    const [todoString, setTodoString] = useState('');
    const {dispatch} = useContext(TodoContext);

    const handleChange = event => {
        event.preventDefault();
        if(todoString === ''){
            return alert("Please enter Todo")
        }
        const todo = {
            todoString,
            id: v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        });
        setTodoString("");
};

    return(
        <Form onSubmit={handleChange}>
      
        <InputGroup>
          <Input
            type="text" name="todo" id="todo" placeholder="Your next Todo" value={todoString}
             onChange={e => setTodoString(e.target.value)}/>
          <InputGroupAddon addonType="prepend">
            <Button 
              color="success"
              
            >
              Add
            </Button>
          </InputGroupAddon>
        </InputGroup>
      
    </Form>
    )
}

export default TodoForm;