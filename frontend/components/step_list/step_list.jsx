import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form'

const StepList = ({ steps, todo_id, receiveStep}) => (
    <div className="new-step-top">
        <b>Steps</b>
        <ul>
            {
                steps.map((step) =>
                    <StepListItemContainer
                        key={step.id}
                        step={step}
                    />
                )
            }
        </ul>
        <br/><br/>
        <StepForm receiveStep={receiveStep} todo_id={todo_id} />
    </div>
)


export default StepList;