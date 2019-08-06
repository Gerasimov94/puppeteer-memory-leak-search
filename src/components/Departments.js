import React, {useMemo} from 'react';
import { Department } from './Department';
import Loader from './Loader';

export function Departments({users, isFetching}) {
	const departments = useMemo(() => users.reduce((memo, item) => {
		if (item.status === 'working') {
			switch (item.specialization) {
				case 'frontend developer':
					memo.frontend.push(item);
					break;
				case 'QA engeneer':
					memo.qa.push(item);
					break;
				case 'backend developer':
					 memo.backend.push(item);
					break;
				case 'techical writer':
				case 'sales manager':
					memo.managment.push(item);
					break;

				default: return null;
			}

			return memo;
		}

		return memo;
	}, {
		backend: [],
		frontend: [],
		qa: [],
		managment: [],
	}), [users]);

	return isFetching
		? <Loader />
		: (<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
			<h1>
				Our departments
			</h1>
			<div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
				{['frontend', 'backend', 'qa', 'managment'].map(dpt => (
					<Department title={dpt} dptUsers={departments[dpt]} key={dpt} />
				))}
			</div>
		</div>)
}