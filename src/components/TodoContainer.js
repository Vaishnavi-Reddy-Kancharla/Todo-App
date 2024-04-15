import React, { useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import RandomQuote from "./RandomQuote"; 
function TodoContainer() {
  const todoList = [
    
  ];

  const [todos, setTodos] = useState(todoList);
  const [completedTaskList, setCompletedTaskList] = useState([]);

  const handleChange = (id) => {
    todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        setCompletedTaskList([...completedTaskList, todo]);
      }
      return todo;
    });
    setTodos(todos.filter((todo, i) => todo.id !== id));

  };
  

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };
  const delTodos = () => {
    setTodos([
      
    ]);
  };
  const completeAll=()=>{
    let updComplete=completedTaskList;

    todos.map((todo) => {
      if (todo.completed==false) {
        todo.completed = !todo.completed;
        //setCompletedTaskList([...completedTaskList, todo]);
        updComplete.push(todo);
      }
      //return todo;
    });
    setCompletedTaskList(updComplete);
    delTodos();
    //setTodos([]);
    
    //setCompletedTaskList(todos);
    //console.log(completed);

    
  


    
  }
  const addTodoItem = (title, tag) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      tag: tag,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="todo-body">
      
      <Header />
      <RandomQuote /> 
      <InputTodo addTodoProps={addTodoItem} deleteAllTodo={delTodos} completeAll={completeAll}/>
      <TodosList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
        completedTaskList={completedTaskList}
        
      />
    </div>
  );
}

export default TodoContainer;
