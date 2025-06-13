const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory database (tạm thời)
let todos = [
  { id: 1, text: 'Học React', completed: false },
  { id: 2, text: 'Làm bài tập', completed: true },
  { id: 3, text: 'Trồng cây', completed: true },
  { id: 4, text: 'Đọc tài liệu', completed: false }
];

// Routes
// Lấy tất cả todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Tạo todo mới
app.post('/api/todos', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  const newId = Math.max(...todos.map(todo => todo.id), 0) + 1;
  const newTodo = {
    id: newId,
    text,
    completed: false
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Cập nhật todo
app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todos[todoIndex] = {
    ...todos[todoIndex],
    completed: completed
  };

  res.json(todos[todoIndex]);
});

// Xóa todo
app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
  
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.status(204).send();
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 