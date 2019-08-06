import React, {useEffect, useCallback, useState} from 'react';

function useEventListener(eventName, element = window, item){
	useEffect(
		() => {
			const isSupported = element && element.addEventListener;
			if (!isSupported) return;
			
			element.addEventListener(eventName, (event) => {
				alert(item.name.first + '   ' + item.name.last)
			});
		},
	);
  }

export function User({user}) {
	const [ref, setRef] = useState(null)

	const measuredRef = useCallback(node => {
		if (node !== null) {
			setRef(node);
		}
	  }, []);


	useEventListener('click', ref, user)

	return (
		<tr ref={measuredRef}>
			<td>
				<img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
			</td>
			<td style={{width: '20%'}}>
				{user.name.title}
				&nbsp;
				{user.name.first}
				&nbsp;
				{user.name.last}
			</td>
			<td style={{width: '30%'}}>
				{user.email}
			</td>
			<td style={{width: '10%'}}>
				{user.gender}
			</td>
			<td style={{width: '10%'}}>
				{user.dob.age}
			</td>
			<td style={{width: '20%'}}>
				{user.specialization}
			</td>
			<td style={{
				color: user.status === 'working' ? 'green' : 'red',
				width: '10%',
				fontWeight: 500,
			}}>
				{user.status}
			</td>
		</tr>
	)
}
