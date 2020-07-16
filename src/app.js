'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from 'reducers/todos/action-creators'
import './css/style.css'

const App = ({ todos, handleAddTodo, handleToggleTodo }) => (
  <div className='todoApp'>
    <form onSubmit={handleAddTodo}>
      <input type='text' name='todo' />
      <button type='submit'>Adicionar</button>
    </form>

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

    <div>
      <h3>Exibir</h3>
      <a href=''>Todos</a> | <a href=''>Finalizados</a> | <a href=''>A fazer</a>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  todos: state
})

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (e) => {
    e.preventDefault()
    dispatch(addTodo(e.target.todo.value))
    e.target.todo.value = ''
  },

  handleToggleTodo: (id) => (e) => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
