import React,{ Component } from 'react';
// import Todos from './Todos';
// import AddTodo from './addTodo';
import Navbar from './nav';
import {BrowserRouter,Route} from 'react-router-dom';
import Contact from './contact';
import About from './about';
import Home from './home';


class App extends Component {
  // state ={todos:[{content:'Buy Milk',id:1},{content:'Make your bed',id:2},{content:'Fuck a whore',id:3}]};
  // deleteTodos =(id)=>{
  //   const todos = this.state.todos.filter(todo=>{
  //     return todo.id !== id;
  //   });
  //   this.setState({todos});

  // };
  // addTodo =(todo)=>{
  //   todo.id =Math.random();
  //   let todos =[...this.state.todos,todo];
  //   this.setState({todos});

  // }
  render(){
    return (
      <BrowserRouter>
          <div className="app">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

            {/* <h1 className="center blue-text">Todo's</h1>
            <Todos todos={this.state.todos} deleteTodos ={this.deleteTodos}/>
            <AddTodo addTodo={this.addTodo}/> */}
          </div>
      </BrowserRouter>
      
      
    )
  };
}



export default App;
