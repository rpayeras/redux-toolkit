import { useState } from 'react'
import { useGetTodoQuery } from './store/apis'

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1)

  const { data: todo, isLoading } = useGetTodoQuery(todoId)
  console.log(todo)

  const nextTodo = () => {
    setTodoId(todoId + 1)
  }

  const previousTodo = () => {
    if (todoId > 1) {
      setTodoId(todoId - 1)
    }
  }

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'true' : 'false'}</h4>
      <pre>
        {JSON.stringify(todo, null, 2)}
      </pre>
      {/* <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <strong>{todo.completed ? 'DONE' : 'PENDING'}</strong>&nbsp;
            {todo.title}
          </li>))}
      </ul> */}
      <button onClick={previousTodo}>Previous Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  )
}
