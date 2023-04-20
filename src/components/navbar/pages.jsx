import React from 'react';

const Pages = (props) => {

	return (
		

		<tr style={{marginTop:'20px'}}>
			
			<th><img src={props.img} style={{
				width: '20px',
				height: '20px',
				left: '60px',
				top: '10px',
			}}></img></th>

			<th><div style={{color: 'white', fontFamily: 'Sulphur Point',
				fontStyle: 'normal',
				fontWeight: '700',
				fontSize: '18px',
				lineheight: '30px',
				position: 'absolute',
				width: '78px',
				height: '30px',






			}}>{props.name}</div></th>


		</tr>
		

		
);};

export default Pages;