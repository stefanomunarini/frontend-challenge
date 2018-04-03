import React, { Component } from 'react';
import backend_host from '../static/strings';

class Flag extends Component {

	render() {
		return (
			<img className="Flag" 
				alt={this.props.name}
				src={backend_host + '/' + this.props.image}
			/>
		);
	}
}

export default Flag;