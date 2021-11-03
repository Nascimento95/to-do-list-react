import React from "react";

class List extends React.Component{
    constructor() {
        super()
        this.state = {
          task1: [],
          task2: []
        }
        
        
      }
  render(){
    //   console.log(" log des props de list tasks ", this.props.tasks);
      const { tasks, suprimer, modifier } = this.props
       let array = [tasks, ...this.state.task1]
        // let push = [tasks, ...this.state.task1]
        console.log("task1 dans list.js", this.state.task1);
    return(
      
        <div className="container ">
            {tasks.map((tache, index) =>  tache = 
                <div id={index} className="row border border-5">
                    <div className="col-4">
                        <h2>description</h2>
                        <div>
                            <p>{tache.description}</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <h2>status:</h2>
                        <div>
                            <p>{tache.status}</p> 
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="d-flex">
                            <button onClick={()=>suprimer(index)} type="button" className="btn btn-danger mt-3">supprimer</button>
                            <button  onClick={()=> modifier(index)} type="button" className="btn btn-primary mt-3">modifier</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
      
    )
  }
}


export default List;