import { connect } from 'react-redux';
import TodoDetailView from './todo_detailview'
import { removeTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/step_actions';

const mapDispatchToProps = dispatch => ({
    removeTodo: id => dispatch(removeTodo(id)),
    receiveSteps: stepItems => dispatch(receiveSteps(stepItems))
})

export default connect(null,
    mapDispatchToProps
    )(TodoDetailView)
