import React from 'react';


const Scroll = (props) => {
	console.log(props);
	return (
<div style={{overflowY: 'scroll', borderTop: '0.1px groove', height:'800px'}}>
	{props.children}
</div>
	);
};

export default Scroll;


/*
		<div style={{overflowY: 'scroll', border: '1px solid black', height:'500px'}}>
			{props.childen}
		</div>
	);
		<div> style={{overflowY: 'scroll', border: '1px solid black', height:'500px'}}>

*/