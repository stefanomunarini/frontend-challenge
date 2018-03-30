import React, { Component } from 'react';
import CountryListItem from './CountryListItem';
import '../static/css/CountryList.css';

class CountryList extends Component {

	constructor(props) {
    super(props);
		this.state = {
			countries: []
		}

		this.fetchCountries = this.fetchCountries.bind(this);
	}

	componentDidMount() {
		this.fetchCountries();
  }

  fetchCountries() {
    fetch('http://127.0.0.1:8001/countries/list')
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
		  })
  }

  render() {

  	console.log(this.state.countries)

  	if (this.state.countries.length > 0){
	  	return (
	  		<ul className="CountryList">
	  			{this.state.countries.map((country) =>
		    		<CountryListItem key={country.name}
		    				 title={country.title}
		    				 image={country.image}
		    				 music={country.music}
		    				 description={country.description}/>
		  		)}
				</ul>
	  	);
	  } else {
	  	return (
	  		<div className="Error">
	  			Error contacting the server. Please, try again in another moment!
	  		</div>
	  	)
	  }
  }
}

export default CountryList;
