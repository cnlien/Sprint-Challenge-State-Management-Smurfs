import React, { useState, useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContexts';

import { Container, Row, Col, Form, Input, Button } from 'reactstrap';

const SmurfsForm = () => {
	const [ newSmurf, setNewSmurf ] = useState({
		name: '',
		age: '',
		height: ''
	});
	const { addSmurfs } = useContext(SmurfContext);

	const handleChange = event => {
		setNewSmurf({ ...newSmurf, [event.target.name]: event.target.value });
	};

	const handleSubmit = () => {
		addSmurfs(newSmurf);
	};

	return (
    <Container>
      <Col className="form-div">
        <h2>Add a Smurf To The Village</h2>
        <Form className="smurfForm" onSubmit={event => handleSubmit(event)}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={newSmurf.name}
            onChange={event => handleChange(event)}
          />
          <Row>
            <Col>
              <Input
                type="number"
                name="age"
                placeholder="Age"
                value={newSmurf.age}
                onChange={event => handleChange(event)}
              />
            </Col>
            <Col>
              <Input
                type="text"
                name="height"
                placeholder="Height"
                value={newSmurf.height}
                onChange={event => handleChange(event)}
              />
            </Col>
          </Row>
          <Button>Add Smurf</Button>
        </Form>
      </Col>
    </Container>
	);
};

export default SmurfsForm;