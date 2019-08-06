import React from 'react';
import '../styles/App.css';
import '../styles/user.css';
import Loader from './Loader';
import { User } from './User';

window.userInstances = [];

function Users({isFetching, users}) {
	return (
		<div style={{
			position: 'relative',
			width: '100vw',
			height: 'calc(100vh - 50px)',
		}}>
			{isFetching
				? <Loader />
				: (
					<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100vw'}}>
						<h1>Users</h1>
						<table cellSpacing={0}>
							<thead>
								<tr className="header-row">
									<th style={{width: '10%'}}>
										photo
									</th>
									<th style={{width: '20%'}}>
										name
									</th>
									<th style={{width: '30%'}}>
										email
									</th>
									<th style={{width: '5%'}}>
										gender
									</th>
									<th style={{width: '5%'}}>
										age
									</th>
									<th style={{width: '20%'}}>
										specialization	
									</th>
									<th style={{width: '10%'}}>
										status
									</th>
								</tr>
							</thead>
							<tbody>
								{users.map(user => {
									const component = <User user={user} key={user.login.uuid} />
									window.userInstances.push(component);

									return component;
								})}
							</tbody>
						</table>
					</div>
				)}
		</div>
	)
}

export default Users;
