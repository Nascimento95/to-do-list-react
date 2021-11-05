import React from "react";

class Form extends React.Component{
    constructor(){
        super()
        this.state ={
            task: ""
        }
        this.handleTaskDescriptionChange = this.handleTaskDescriptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // recupère la valeur de l'input
    handleTaskDescriptionChange(e) {
        this.setState({task: e.target.value })
       
    }
    // function qui recup la function addtask de app.js  qui remet a zero mon task dans form.js
    handleSubmit(e){
        e.preventDefault()
        this.props.addTask(this.state.task)
        this.setState({task:""})
        
      }

  render(){
     
    //   const { addTask } = this.props
    return(
      <>
        <form className="container" onSubmit={this.handleSubmit}>
            <div className="mb-3 ">
                <label  className="form-label"></label>
                <input 
                    type="text" 
                    className="form-control"  
                    placeholder="entrez du texte"
                    onChange={this.handleTaskDescriptionChange}
                    value ={this.state.task}
                />
                
                <button 
                    type="submit" 
                    className="btn btn-primary">Ajouter a ma liste</button>
            </div>
        </form>
      </>
    )
  }
}


export default Form;