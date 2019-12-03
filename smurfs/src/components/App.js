import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SmurfsForm from './SmurfsForm';
import SmurfsList from './SmurfsList';

import { SmurfContext } from '../contexts/SmurfContexts';
import './App.scss';

import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
	const [ smurfs, setSmurfs ] = useState();

	useEffect(() => {
		axios
			.get('http://localhost:3333/smurfs')
			.then(res => {
				setSmurfs(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	const addSmurfs = smurf => {
		axios.post('http://localhost:3333/smurfs', smurf).then(res => {}).catch(err => console.log(err));
	};

	const deleteSmurf = smurfId => {
		axios
			.delete(`http://localhost:3333/smurfs/${smurfId}`)
			.then(res => {
				setSmurfs(res.data);
			})
			.catch(err => console.log(err));
	};

	return (
		<SmurfContext.Provider value={{ smurfs, setSmurfs, addSmurfs, deleteSmurf }}>
			<Container className="app">
				<h1>Smurfs 'N Stuff with Redux</h1>
				<SmurfsForm />
				<SmurfsList />
			</Container>
		</SmurfContext.Provider>
	);
};

export default App;