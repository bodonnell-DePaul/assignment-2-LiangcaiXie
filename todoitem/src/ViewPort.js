import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ToDoCreate from './ToDoCreate.js';
import { todos as initialTodos } from './todoItems';  
import './ViewPort.css';
import ToDoList from './ToDoList.js';

function ViewPort() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <Container>
      <Row className="title mb-4">Assignment2 Liangcai's ToDoList</Row>
      <Row>
        <Col sm={4}>
          <ToDoCreate todos={todos} setTodos={setTodos} />
        </Col>
        <Col sm={8}>
          <ToDoList todos={todos} setTodos={setTodos} />
        </Col>
      </Row>
    </Container>
  );
}

export default ViewPort;
