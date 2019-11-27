import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContexts';

import { Container } from 'reactstrap'

import Smurfs from './Smurfs';

const SmurfsList = props => {
	const { smurfs, deleteSmurf } = useContext(SmurfContext);

	return (
		<Container className="smurfsList">
			<Container>
				<h2>The Residents of Smurftown</h2>
			</Container>
        	{smurfs && smurfs.map(smurf => <Smurfs key={smurf.id} smurf={smurf} deleteSmurf={deleteSmurf} />)}
		</Container>
	);
};

export default SmurfsList;