import React from "react";
import Form from "./Components/Form";
import List from "./Components/List";

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      tasks: []
    }
    this.addTask = this.addTask.bind(this)
    this. deleteTask= this. deleteTask.bind(this)
    this.modifierTask = this.modifierTask.bind(this)
    
  }
  // function qui met la valeur de l'input str en objet  et que je push dans le array this.state.task
  addTask(str){
    let objet = {description : str, status : "To Do"}
    this.setState({tasks :  [objet, ...this.state.tasks]})
  }

  deleteTask(index){
    let array = this.state.tasks
    this.setState({task: array.splice(index,1)}) 
  }

  modifierTask(str,index){
    // this.setState({task: str})
    //  this.setState({task: });
  }

  



  render(){
    console.log("ce quil y a dans task .aap ", this.state.tasks);
    return(
      <>
        <h1 className="text-center">To do list</h1>
        <Form  addTask={this.addTask}  />
        <div>
          <List modifier={this.modifierTask} suprimer={this.deleteTask}  tasks={this.state.tasks} />
        </div>
        
      </>
    )
  }
}


export default App;
