import React from 'react';
import Util from '../util';

class StepForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateVal = this.updateVal.bind(this);
    }

    updateVal(e){
        this.setState({value: e.currentTarget.value})
    }

    handleSubmit(e){
        e.preventDefault();
        const newStep = {
            id: Util.uniqueId(),
            title: this.state.value,
            done: false,
            todo_id: this.props.todo_id
        }
        this.props.receiveStep(newStep);
        this.clearForms();
    }

    clearForms(){
        this.setState({ value: ""})
    }
    

    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="addStep">Add Step: </label>
            <input onChange={this.updateVal} type="text" id="addStep" val={this.state.value} />
            <button>Add Step</button>
        </form>
        )
    }
}

export default StepForm;