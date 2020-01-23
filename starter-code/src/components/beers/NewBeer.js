import React, { Component } from 'react';
import BeerService from '../../services/BeerService';
import { Redirect } from 'react-router-dom';

export default class NewBeer extends Component {
	state = {
		beer: {
			brewers_tips: '',
			name: '',
			tagline: '',
			first_brewed: '',
			attenuation_level: '',
			description: '',
			contributed_by: '',
		},
		error: false,
		created: false
	}

	handleFormSubmit(e) {
		e.preventDefault();
		BeerService.create(this.state.beer).then(
			data => this.setState({ created: true })
		).catch(
			error => this.setState({ error: true })
		);
	}

	handleChange(e) {
		this.setState({ beer: { ...this.state.beer, [e.target.name]: e.target.value } })
	}

	render() {
		if (this.state.created) {
			return (<Redirect to="/beers" />);
		} else if (this.state.error) {
			return (<div>:(</div>);
		} else {
			return (
				<form onSubmit={(e) => this.handleFormSubmit(e)}>
					<input type="text" value={this.state.beer.name} placeholder="name" name="name" onChange={(e) => this.handleChange(e)}></input>
					<input type="text" value={this.state.beer.tagline} placeholder="tagline" name="tagline" onChange={(e) => this.handleChange(e)}></input>
					<input type="text" value={this.state.beer.description} placeholder="description" name="description" onChange={(e) => this.handleChange(e)}></input>
					<input type="text" value={this.state.beer.first_brewed} placeholder="first brewed" name="first_brewed" onChange={(e) => this.handleChange(e)}></input>
					<input type="text" value={this.state.beer.brewers_tips} placeholder="brewers_tips" name="brewers_tips" onChange={(e) => this.handleChange(e)}></input>
					<input type="number" value={this.state.beer.attenuation_level} placeholder="attenuation level" name="attenuation_level" onChange={(e) => this.handleChange(e)}></input>
					<input type="text" value={this.state.beer.contributed_by} placeholder="contributed by" name="contributed_by" onChange={(e) => this.handleChange(e)}></input>
					<button type="submit">Submit</button>
				</form>)
		}
	}
}