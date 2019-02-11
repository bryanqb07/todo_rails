import { connect } from 'react-redux';
import TodoList from './todo_list'
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, removeTodo } from '../../actions/todo_actions';

const mapStateToProps = (state) => ({ //specify props to be passed down
    todos: allTodos(state)
})

const mapDispatchToProps = dispatch => ({ //event handler methods
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    removeTodo: (id) => dispatch(removeTodo(id))
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(TodoList);