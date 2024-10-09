import React, { useState, useEffect, useRef } from 'react';
import { Container, ListGroup, Tabs, Tab, Form, Button, Row, Col } from 'react-bootstrap';
import { parseISO } from 'date-fns';
import { todos as initialTodos } from './todoItems';  
import './style.css';

function ToDoList() {
    const [todos, setTodos] = useState(initialTodos);
    const [selectedTodo, setSelectedTodo] = useState(todos[0] || null);
    const [newTodo, setNewTodo] = useState({ title: '', dueDate: '', description: '' });
    const descriptionRef = useRef(null);
    const [description, setDescription] = useState(selectedTodo ? selectedTodo.description : '');
    const [dueDate, setDueDate] = useState(selectedTodo ? selectedTodo.dueDate : '');

    useEffect(() => {
        if (selectedTodo) {
            const foundTodo = todos.find(todo => todo.id === selectedTodo.id);
            if (foundTodo) {
                setDescription(foundTodo.description);
                setDueDate(foundTodo.dueDate);
            }
        }
    }, [selectedTodo, todos]);

    const handleSave = () => {
        if (selectedTodo && descriptionRef.current) {
            const updatedDescription = descriptionRef.current.innerText;
            setTodos(prevTodos =>
                prevTodos.map(todo =>
                    todo.id === selectedTodo.id ? { ...todo, description: updatedDescription } : todo
                )
            );
        }
    };

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
        const todoToAdd = { ...newTodo, id: newId };
        setTodos([...todos, todoToAdd]);
        setNewTodo({ title: '', dueDate: '', description: '' }); // Reset form
    };

    const getVariant = (dueDate) => {
        const currentDate = new Date();
        const todoDate = parseISO(dueDate);
        const timeDifference = todoDate.getTime() - currentDate.getTime();
        const daysRemaining = timeDifference / (1000 * 60 * 60 * 24);

        if (daysRemaining > 7) {
            return 'primary';
        } else if (daysRemaining > 4) {
            return 'success';
        } else if (daysRemaining > 2) {
            return 'warning';
        } else {
            return 'danger';
        }
    };

    return (
        <Container>
            <Row> 
                <Col sm={12} className="mb-3 mb-4 text-center">
                    <h1>Assignment 2: Liangcai-Xie ToDo List</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <Form onSubmit={handleSubmit} className="mb-3 form-todo-create" >
                        <Form.Group controlId="formTodoTitle">
                            <Form.Label>ToDo Item</Form.Label>
                            <Form.Control type="text" name="title" placeholder="Add todo item" value={newTodo.title} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="formDueDate">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control type="date" name="dueDate" value={newTodo.dueDate} onChange={handleChange} required />
                        </Form.Group>
                        <Button type="submit" className="w-100 mt-3 btn-add-todo">Add Todo</Button>
                    </Form>
                </Col>
                <Col sm={4}>
                    <ListGroup>
                        {todos.map((todo) => (
                            <ListGroup.Item
                                key={todo.id}
                                action
                                onClick={() => setSelectedTodo(todo)}
                                variant={getVariant(todo.dueDate)}
                                role="tab"
                                as="a" 
                                href={`#${todo.id}`}
                                className={`list-group-item-${getVariant(todo.dueDate)}`}
                            >
                                {todo.title}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col sm={4}>
                    {selectedTodo && (
                        <Tabs defaultActiveKey="description" id="todo-tabs" className="mt-3">
                            <Tab eventKey="description" role="tabpanel">
                                <Form className="p-0">
                                    <Form.Group controlId="todoDescription">
                                        <div
                                            ref={descriptionRef}
                                            contentEditable
                                            suppressContentEditableWarning={true}
                                            className="border p-1"
                                            style={{ minHeight: '100px' }}
                                            onBlur={handleSave}
                                        >
                                            {selectedTodo.description}
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="todoDueDate">
                                        {/* <Form.Label>Due Date</Form.Label> */}
                                        <Form.Control style={{ width: '50%' }} 
                                            type="date"
                                            value={dueDate}
                                            onChange={(e) => {
                                                setDueDate(e.target.value);
                                                const updatedTodo = {...selectedTodo, dueDate: e.target.value};
                                                setTodos(prevTodos => 
                                                    prevTodos.map(todo => 
                                                        todo.id === selectedTodo.id ? updatedTodo : todo
                                                    )
                                                );
                                            }}
                                            onBlur={handleSave}
                                        />
                                    </Form.Group>
                                </Form>
                            </Tab>
                        </Tabs>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default ToDoList;
