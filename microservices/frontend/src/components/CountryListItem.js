import React, { Component } from 'react';
import '../static/css/CountryListItem.css';
import Flag from './Flag';
import Anthem from './Anthem';

class CountryListItem extends Component {
  render() {
    return (

    	<div className="CountryListItem">
    		<div className="wrapper">
				  <Flag className="Flag"
				  			name={this.props.title}
				  			image={this.props.image}/>
  			</div>
  			<h4>{this.props.title}</h4> 
  			<div className="wrapper">
				  <Anthem className="Anthem"
				  			name={this.props.title}
				  			music={this.props.music}/>
			  </div>
			  <div className="wrapper">
			    <p>{this.props.description}</p> 
			  </div>
			</div>
    );
  }
}

export default CountryListItem;