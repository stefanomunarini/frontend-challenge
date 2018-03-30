import React, { Component } from 'react';

class Flag extends Component {

	render() {
		return (
			<img className="Flag" 
				alt={this.props.name}
				src={'http://127.0.0.1:8001/'+this.props.image}
			/>
		);
	}
}

export default Flag;