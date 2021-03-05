import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { MdCancel } from "react-icons/md";
import { TodoContext } from "../Context/TodoContext";
import { REMOVE_TODO } from "../Context/action.types";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ListGroup className="mt-5 mb-2 items">
      {todos.slice(0,7).map(t => (
        <ListGroupItem key={t.id}>
          {t.todoString}
          <span
            className="float-right"
            onClick={() => {
              dispatch({
                type: REMOVE_TODO,
                payload: t.id
              });
            }}
          >
            <MdCancel />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
