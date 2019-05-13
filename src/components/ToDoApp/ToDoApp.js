import React from 'react';
import ToDoList from "./ToDoList";

export default class ToDoApp extends React.Component {
    constructor(props){
        super(props)
        this.state={
            items:[],
            newTask:''
        }
    }

    handleDelete(item) {
        const items = this.state.items;
        this.setState({
            items: items.filter(el=>el!=item)
        })
    }

    handleChange(e){
        this.setState({
            newTask: e.target.value
        })
    }

    handleClick(){
        const items =this.state.items;
        const newTask = this.state.newTask;

        this.setState({
            items: items.concat({
                id: Date.now(),
                task: newTask
            }),
            newTask: ''
        })
    }

    componentDidMount(){
        //issue your ajax requests here.
    }

    render(){
        return (
            <div>
                <h2>To Do List App</h2>
                <form className='form-inline'>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type='text'
                               className='form-control'
                               value={this.state.newTask}
                               onChange={(e)=>this.handleChange(e)}
                        />
                    </div>
                    <button type="button"
                            className='btn btn-primary mb-2'
                            onClick={()=>this.handleClick()}
                    >Add</button>
                </form>
                <hr/>
                <ToDoList items={this.state.items}
                          onDelete={(item)=>this.handleDelete(item)}
                />
            </div>
        )
    }
}