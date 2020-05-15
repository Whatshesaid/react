import React from 'react';
import './App.css';
import Todo from "./components/Todo"
import todosdata from "./Todolist"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
        todos: todosdata
    }
    this.handleChange=this.handleChange.bind(this)
  }
  

  handleChange(id){
    
    this.setState(prevState => {
      const updatedtodo = prevState.todos.map(todo => {
        if (todo.id == id){
          todo.completed = !todo.completed
          console.log(todo)
        }
        
        return todo
      })
      return {
        todos: updatedtodo
      } 
    })
  }

  render(){
    const todosform = this.state.todos.map(todo => {
      return(
        <Todo key={todo.id} task={todo} handleChange={this.handleChange}/>
      )
    })

    return (
      <div className="todo-list">
        {todosform}
      </div>
    );
  }
}

export default App;
