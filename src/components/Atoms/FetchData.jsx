import React, { useReducer } from 'react'
import useFetch from '../CustomHooks/useFetch'

const FetchData = () => {
  const users = useFetch('https://jsonplaceholder.typicode.com/users', [])
  const posts = useFetch('https://jsonplaceholder.typicode.com/posts', [])

  return (
    <div className="data">
      <ul>
        {users.loading && <p>Cargando...</p>}
        {users.data && users.data.map(user => (
        <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <ul>
        {posts.loading && <p>Cargando...</p>}
        {posts.data && posts.data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>

  )

}
export default FetchData