import React from 'react';

class StepListItem extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.removeStep(this.props.step.id);
    }

    render(){
        return(
            <div>
                <li>{this.props.step.title}</li>
                <button onClick={this.handleClick}>Remove Step</button>
            </div>
        ) 
    }
}

export default StepListItem;