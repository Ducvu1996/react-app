import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:5000/api';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch todos từ API
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch(`${API_URL}/todos`);
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      const data = await response.json();
      setTodos(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  // Thêm todo mới
  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      const response = await fetch(`${API_URL}/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newTodo }),
      });

      if (!response.ok) {
        throw new Error('Failed to add todo');
      }

      const data = await response.json();
      setTodos([...todos, data]);
      setNewTodo('');
    } catch (err) {
      setError(err.message);
    }
  };

  // Toggle trạng thái completed
  const handleToggleTodo = async (id, completed) => {
    try {
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !completed }),
      });

      if (!response.ok) {
        throw new Error('Failed to update todo');
      }

      const updatedTodo = await response.json();
      setTodos(todos.map(todo =>
        todo.id === id ? updatedTodo : todo
      ));
    } catch (err) {
      setError(err.message);
    }
  };

  // Xóa todo
  const handleDeleteTodo = async (id) => {
    try {
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }

      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // CSS styles
  const styles = {
    container: {
      maxWidth: '500px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    form: {
      display: 'flex',
      marginBottom: '20px'
    },
    input: {
      flex: 1,
      padding: '8px',
      fontSize: '16px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      marginRight: '10px'
    },
    button: {
      padding: '8px 16px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    list: {
      listStyle: 'none',
      padding: 0
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      borderBottom: '1px solid #eee'
    },
    checkbox: {
      marginRight: '10px'
    },
    completed: {
      textDecoration: 'line-through',
      color: '#888'
    },
    deleteButton: {
      marginLeft: 'auto',
      backgroundColor: '#ff4444',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '4px 8px',
      cursor: 'pointer'
    },
    error: {
      color: 'red',
      marginBottom: '10px'
    }
  };

  if (isLoading) {
    return <div style={styles.container}>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h2>Todo List</h2>
      
      {error && <div style={styles.error}>{error}</div>}
      
      <form onSubmit={handleAddTodo} style={styles.form}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Thêm công việc mới..."
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Thêm</button>
      </form>

      <ul style={styles.list}>
        {todos.map(todo => (
          <li key={todo.id} style={styles.listItem}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id, todo.completed)}
              style={styles.checkbox}
            />
            <span style={todo.completed ? styles.completed : null}>
              {todo.text}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              style={styles.deleteButton}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>

      <p>
        Còn {todos.filter(todo => !todo.completed).length} công việc chưa hoàn thành
      </p>
    </div>
  );
}

export default TodoList; 