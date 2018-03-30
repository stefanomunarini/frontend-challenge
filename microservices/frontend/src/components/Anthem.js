import React, { Component } from 'react';

class Anthem extends Component {

	render() {
    return (
    	<audio controls>
			  <source alt={this.props.name}
			  				src={'http://localhost:8000/'+this.props.music}
			  				type="audio/mp3"/>
			</audio>
    );
  }
}

export default Anthem;