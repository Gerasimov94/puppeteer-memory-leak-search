import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Users from '../components/App';
import '../styles/header.css'
import axios from 'axios';
import { Departments } from '../components/Departments';

const SPECIALIZATIONS = {
	0: 'frontend developer',
	1: 'QA engeneer',
	2: 'backend developer',
	3: 'techical writer',
	4: 'sales manager',
}

const AppRouter = () => {
	const [users, setUsers] = useState([]);
	const [isFetching, setFetchingStatus] = useState(true);

	useEffect(() => {
		async function fetchMyAPI() {
			const response = await axios.get('https://randomuser.me/api/?results=50', {
				headers: {
					'Access-Control-Allow-Origin': '*',
				},
			});

			setUsers(response.data.results.map(user => ({
				...user,
				specialization: SPECIALIZATIONS[Math.floor(Math.random() * 4)],
				status: Math.floor(Math.random() * 10) < 8 ? 'working' : 'fired',
			})))
			setFetchingStatus(false)
		}; 
	  
		fetchMyAPI();
	  }, []);

	return (
    <Router>
		<div>
			<nav>
			<ul>
				<li>
					<Link to="/">Users</Link>
				</li>
				<li>
					<Link to="/departments">Departments</Link>
				</li>
			</ul>
			</nav>
			<Route path="/" exact render={() => <Users users={users} isFetching={isFetching}/>} />
			<Route path="/departments" exact render={() => <Departments users={users} isFetching={isFetching} />} />
		</div>
	</Router>
)};

export default AppRouter;
