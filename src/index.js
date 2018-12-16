import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Application extends Component {
	render() {
		return (
			<div>
				Hello
			</div>
		);
	}
}

ReactDOM.render(<Application />, document.getElementById('root'));
