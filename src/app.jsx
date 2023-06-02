import React from 'react';
import { useEffect, useState } from 'react';
import './app.css';
import { RandomAvatar } from 'react-random-avatar';

export function App() {
  const { users, search } = userSearch();

  return (
    <div className='App'>
      <h1>Avatar Codex</h1>
      <input
        type='text'
        placeholder='Search here...'
        onChange={(e) => search(e.target.value)}
      />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
            <RandomAvatar size={25} />
              <div>
                <p>Name: {user.name}</p>
                <p>Company: {user.company}</p>
                <p>Email: {user.email}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function userSearch() {
  const [users, setUsers] = useState([]);

  const search = async (q) => {
    const response = await fetch(
      'http://localhost:8080?' + new URLSearchParams({ q })
    );
    const data = await response.json();
    setUsers(data);
  };

  return { users, search };
}

export default App;
