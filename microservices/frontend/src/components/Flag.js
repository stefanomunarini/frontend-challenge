import React, { Component } from 'react';

class Flag extends Component {

	render() {
		return (
			<img className="Flag" 
				alt={this.props.name}
				src={'http://localhost:8000/'+this.props.image}
			/>
		);
	}
}

export default Flag;