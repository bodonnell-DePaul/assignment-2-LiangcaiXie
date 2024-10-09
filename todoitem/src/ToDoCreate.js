import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './ViewPort.css'; 

function ToDoCreate({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState({
    title: '',
    dueDate: '',
    description: ''
  });

  const { title, dueDate, description } = newTodo;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTodo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const todoToAdd = {
      ...newTodo,
      id: newId
    };

    setTodos(prevTodos => [...prevTodos, todoToAdd]);
    setNewTodo({ title: '', dueDate: '', description: '' }); // Reset form
  };

  return (
    <Form onSubmit={handleSubmit} className="form-todo-create">
      <Form.Group controlId="formTodoTitle">
        <Form.Label>ToDo Item</Form.Label>
        <Form.Control type="text" name="title" placeholder="Add todo item" value={title} onChange={handleChange} required />
      </Form.Group>

      <Form.Group controlId="formDueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" name="dueDate" value={dueDate} onChange={handleChange} required />
      </Form.Group>

      <Button variant="primary" type="submit" cclassName="mt-3 btn-add-todo"> 
        Add Todo
      </Button>
    </Form>
  );
}

export default ToDoCreate;
