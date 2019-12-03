import React from 'react';

import { Card, CardText, CardHeader, CardBody, Button } from 'reactstrap';

const Smurfs = props => {
	console.log(props);
	return (
	<Card className="smurfsCard">
		<CardHeader><h3>{props.smurf.name}</h3></CardHeader>
        <CardBody>
        <CardText>Age: {props.smurf.age}</CardText>
        <CardText>Height: {props.smurf.height}</CardText>
        <Button onClick={() => props.deleteSmurf(props.smurf.id)}>Remove Smurf</Button>
      </CardBody>
	</Card>
	);
};

export default Smurfs;