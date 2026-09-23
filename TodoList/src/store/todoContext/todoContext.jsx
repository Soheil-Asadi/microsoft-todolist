import { createContext, useReducer, useState } from "react";
import React from "react";


export const TodoContext = createContext({
  todos: [],
  selectedTodoId: null,
  searchedValue: "",
  addTodos: () => {},
  removeTodos: () => {},
  editTodos: () => {},
  editTodoDescription: () => {},
  toggleComplete: () => {},
  toggleImportant: () => {},
  setTodoId: () => {},
  setSearchedValue: () => {},
});

function todosReducer(state, action) {
  if (action.type === "ADD") {
    const id = crypto.randomUUID();
    const newTodo = { ...action.payload, id };
    return [...state, newTodo];
  }
  if (action.type === "DELETE") {
    return state.filter((todo) => todo.id !== action.id);
  }

  if (action.type === "TOGGLE_COMPLETE") {
    const updatedTodos = state.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    return updatedTodos;
  }
  if (action.type === "EDIT_DESC") {
    const updatedTodos = state.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, description:action.payload.value };
      }
      return todo;
    });
    return updatedTodos;
  }
  if (action.type === "TOGGLE_IMPORTANT") {
    const updatedTodos = state.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, important: !todo.important };
      }
      return todo;
    });
    return updatedTodos;
  }
  if (action.type === "EDIT") {
    // khoroojie map() ye [] mishe pas har todo ke ye {} hast dar nahayat shoot mishe dakhel ye[] koli
    // va state ke ye [] hast dorost mishe
    const editedTodos = state.map((todo) => {
      if (todo.id !== action.payload.todo.id) {
        return todo;
      }
      return {
        ...todo,
        todoOptions: {
          ...todo.todoOptions,
          ...action.payload.value,
        },
      };
    });
    return editedTodos;
  }

  return state;
}

export default function TodoContextProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, []);

  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const [searchedValue, setSearchedValue] = useState("");

  function addTodos(value) {
    dispatch({ type: "ADD", payload: value });
  }

  function editTodos(todo, value) {
    dispatch({ type: "EDIT", payload: { todo, value } });
  }

  function toggleComplete(todo) {
    dispatch({ type: "TOGGLE_COMPLETE", payload: todo });
  }

  function toggleImportant(todo) {
    dispatch({ type: "TOGGLE_IMPORTANT", payload: todo });
  }
  function setTodoId(id) {
    setSelectedTodoId(id);
  }
  function removeTodos(id) {
    dispatch({ type: "DELETE", id });
  }
  function editTodoDescription(id,value){
    dispatch({type:'EDIT_DESC',payload:{id,value}})
  }

  const todoValue = {
    todos,
    selectedTodoId,
    searchedValue,
    setSearchedValue,
    setTodoId,
    addTodos,
    removeTodos,
    editTodos,
    editTodoDescription,
    toggleComplete,
    toggleImportant,
  };
  return (
    <TodoContext.Provider value={todoValue}>{children}</TodoContext.Provider>
  );
}
