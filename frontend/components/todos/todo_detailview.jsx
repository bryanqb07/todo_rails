import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component{
    constructor(props){
        super(props);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    handleClickDelete(e) {
        this.props.removeTodo(this.props.todo.id);
    }

    render(){
        return (
            <div className="step-container">
                <p>Details: {this.props.todo.body}</p>
                <div className="new-step-container">
                <StepListContainer todo_id={this.props.todo.id} />
                <br/>
                <button onClick={this.handleClickDelete}>Remove Todo Item</button>
                </div>
            </div>
        )
    }
}

export default TodoDetailView;