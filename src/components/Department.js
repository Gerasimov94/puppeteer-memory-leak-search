import React from 'react';
import frontendLogo from '../assets/frontend.png';
import backendLogo from '../assets/backend.svg';
import qaLogo from '../assets/qa.svg';
import managmentLogo from '../assets/managment.svg';

const logos = {
	frontend: frontendLogo,
	backend: backendLogo,
	qa: qaLogo,
	managment: managmentLogo
}

export function Department({dptUsers, title}) {
	return <div style={{
		border: '1px solid gray', display: 'flex', flexDirection: 'column',
		minWidth: '270px', height: '80vh', alignItems: 'center',
		maxWidth: '22vw', margin: '10px 20px',
	}}>
		<img
			src={logos[title]}
			alt={`${title} logo`}
			width={title !== 'backend' ? 250 : 150}
			height={250}
			style={{padding: 20}}
		/>
		<div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', padding: '0px 20px'}}>
			<h2><div>{title.charAt(0).toUpperCase() + title.slice(1)} department</div></h2>
			<h4>
				About us:
			</h4>
			<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Nam ac mauris at quam gravida egestas. Mauris ligula justo, elementum non
				iaculis eget, consectetur nec nisi. Donec at dui eros.
				Praesent aliquet ultrices justo quis mollis.
			</div>
			<div>
				<h4>
					Employees count: {dptUsers.length}
				</h4>
			</div>
		</div>
		
	</div>
}