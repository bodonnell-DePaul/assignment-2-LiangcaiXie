import React, { useState, useEffect, useRef } from 'react';
import { ListGroup, Tabs, Tab, Form, Row, Col } from 'react-bootstrap';
import { parseISO } from 'date-fns';

function ToDoList({ todos, setTodos }) {
  const [selectedTodo, setSelectedTodo] = useState(todos[0] || null);
  const [description, setDescription] = useState(selectedTodo ? selectedTodo.description : '');
  const [dueDate, setDueDate] = useState(selectedTodo ? selectedTodo.dueDate : '');
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (selectedTodo) {
      setDescription(selectedTodo.description);
      setDueDate(selectedTodo.dueDate);
    }
  }, [selectedTodo]);

  const handleSave = () => {
    if (selectedTodo && descriptionRef.current) {
      const updatedDescription = descriptionRef.current.innerText;
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === selectedTodo.id
            ? { ...todo, description: updatedDescription, dueDate: dueDate }
            : todo
        )
      );
    }
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
    <Row>
      <Col sm={5}>
        <ListGroup>
          {todos.map((todo) => (
            <ListGroup.Item
              key={todo.id}
              action
              onClick={() => setSelectedTodo(todo)}
              variant={getVariant(todo.dueDate)}
            >
              {todo.title}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      <Col sm={7}>
        {selectedTodo && (
          <Tabs defaultActiveKey="description" id="todo-tabs" className="mt-3">
            <Tab eventKey="description">
              <div className="p-0">
                <div
                  ref={descriptionRef}
                  contentEditable
                  suppressContentEditableWarning={true}
                  className="border p-1"
                  style={{ minHeight: '100px' }}
                  onBlur={handleSave}
                >
                  {description}
                </div>
                <div className="p-1">
                  <Form.Group controlId="dueDate">
                    <Form.Control 
                      style={{ width: '30%' }} 
                      type="date" 
                      value={dueDate}  
                      onChange={(e) => setDueDate(e.target.value)}
                      onBlur={handleSave} // Trigger save on losing focus
                    />
                  </Form.Group>
                </div>
              </div>
            </Tab>
          </Tabs>
        )}
      </Col>
    </Row>
  );
}

export default ToDoList;
