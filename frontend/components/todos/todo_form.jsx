import React from 'react';
import Util from '../util';


class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {titleVal: "", bodyVal: ""};
        this.updateValue = this.updateValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForms = this.clearForms.bind(this);
    }

    updateValue(e){
        if(e.currentTarget.id === "title"){
            this.setState({ titleVal: e.currentTarget.value });
        }
        else{
            this.setState({ bodyVal: e.currentTarget.value });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const newTodo = {
            id: Util.uniqueId(),
            title: this.state.titleVal,
            body: this.state.bodyVal,
            done: false
        }
        this.props.receiveTodo(newTodo);
        this.clearForms();
    }

    clearForms(){
        this.setState({titleVal: "", bodyVal: ""})
    }

    render(){ 
    return (
        <div className="add-new-todo">
            <b>Add New Todo</b>
            <br/>
            <form onSubmit={this.handleSubmit}>
                <div className="form-wrapper">
                <label htmlFor="title">Title</label>
                <input
                id="title"
                name="title"
                onChange={this.updateValue} 
                type="text" 
                value={this.state.titleVal}/>
                </div>
                <br/>
                <div className="form-wrapper">
                <label htmlFor="body">Body</label>
                <input
                    id="body"
                    name="body"
                    onChange={this.updateValue}
                    type="text"
                    value={this.state.bodyVal} />
                </div>
                <br/>
                <button>Submit</button>
            </form >
        </div>
    )
    }
}

export default TodoForm;