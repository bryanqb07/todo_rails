export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";


export const receiveSteps = (stepItems) => {
    let stepsObj = {
        type: RECEIVE_STEPS,
        steps: {}
    };
    stepItems.forEach( step => stepsObj.steps[step.id] = step)
    return stepsObj;
}


export const receiveStep = (stepItem) => ({
    type: RECEIVE_STEP,
    stepItem
})

export const removeStep = id => ({
    type: REMOVE_STEP,
    id
})