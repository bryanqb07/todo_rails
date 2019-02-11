
export const allTodos = ({todos}) => (
    Object.keys(todos).map(id => todos[id])
)

export const stepsByTodoId = ({steps}, targetID) => {
    const allSteps = Object.keys(steps).map(id => steps[id])
    let matches = [];
    allSteps.forEach(step => { 
        if(step.todo_id === targetID){
            matches.push(step);
        }
    })
    return matches;
}





