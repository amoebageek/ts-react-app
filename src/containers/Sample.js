import * as React from 'react';

class Sample extends React.Component {
	render() {
		return (
			<React.Fragment>
				<h1>
					{
						this
							.state
							.greetings
					}
				</h1>
				<h2>
					{
						this
							.state
							.message
					}
				</h2>
				<h3>
					Container
				</h3>
			</React.Fragment>
		);
	}
}
export default Sample;
