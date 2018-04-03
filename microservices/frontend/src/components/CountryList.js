import React, { Component } from 'react';
import CountryListItem from './CountryListItem';
import '../static/css/CountryList.css';
import backend_host from '../static/strings';

class CountryList extends Component {

	errorMessage = "Ops! Something went wrong!"

	constructor(props) {
    super(props);
		this.state = {
			countries: [],
			errorMessage: ""
		}

		this.fetchCountries = this.fetchCountries.bind(this);
	}

	componentDidMount() {
		this.fetchCountries();
  }

  fetchCountries() {
    fetch(backend_host + '/countries/list')
		  .then((response) => {
		    return response.json()
		  })
		  .then((json) => {		    
    		this.setState({
  				countries: json.data
    		})
		  })
		  .catch((exception) => {
		    console.log('parsing failed', exception)
		    this.setState({errorMessage: this.errorMessage})
		  })
  }

  render() {
  	return (
  		<div>
	  		<ul className="CountryList">
	  			{this.state.countries.map((country) =>
		    		<CountryListItem key={country.name}
		    				 title={country.title}
		    				 image={country.image}
		    				 music={country.music}
		    				 description={country.description}/>
		  		)}
	  		</ul>
	  		<div>{this.state.errorMessage}</div>
  		</div>
  	);
  }
}

export default CountryList;
