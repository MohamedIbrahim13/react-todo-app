import React,{ Component } from 'react';
import Todos from './Todos';
import AddTodo from './addTodo';



class Home extends Component {
  state ={todos:[{content:'Buy Milk',id:1},{content:'Make your bed',id:2},{content:'Fuck a whore',id:3}]};
  deleteTodos =(id)=>{
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id;
    });
    this.setState({todos});

  };
  addTodo =(todo)=>{
    todo.id =Math.random();
    let todos =[...this.state.todos,todo];
    this.setState({todos});

  }
  render(){
    return (
      
        <div className="todo-app container">
            
            <h1 className="center blue-text">Todo's</h1>
            <Todos todos={this.state.todos} deleteTodos ={this.deleteTodos}/>
            <AddTodo addTodo={this.addTodo}/>
        </div>
      
      
      
    )
  };
}



export default Home;