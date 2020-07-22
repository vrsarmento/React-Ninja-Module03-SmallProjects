'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from 'reducers/todos/action-creators'

export const TodosList = ({ todos, handleToggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <li
        key={todo.id}
        className={todo.completed ? 'completed' : ''}
        onClick={handleToggleTodo(todo.id)}
      >
        <span>{todo.text}</span>
      </li>
    ))}
  </ul>
)

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  handleToggleTodo: (id) => (e) => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
