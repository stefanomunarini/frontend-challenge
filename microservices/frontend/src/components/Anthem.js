import React, { Component } from 'react';

class Anthem extends Component {

	render() {
    return (
    	<audio controls>
			  <source alt={this.props.name}
			  				src={'http://127.0.0.1:8001/'+this.props.music}
			  				type="audio/mp3"/>
			</audio>
    );
  }
}

export default Anthem;