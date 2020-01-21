import React, { Component } from 'react';
import BeersService from '../../services/BeersService';
import { Redirect } from 'react-router-dom';

export default class BeerForm extends Component {
	state = {
		beer: {
			name: '',
			tagline: '',
			description: '',
			first_brewed: '',
			brewers_tips: '',
			attenuation_level: '',
			contributed_by: ''
		},
		error: undefined,
		created: false
	}

	handleFormSubmit(e) {
		e.preventDefault();

		BeersService.add(this.state.beer).then(
			beer => this.setState({ created: true })
		).catch(
			error => this.setState({ error: error })
		)
	}

	handleChange(event, name) {
		this.setState({ beer: { ...this.state.beer, [name]: event.target.value } })
	}

	render() {
		if (this.state.created) {
			return (
				<Redirect to="/beers" />
			)
		}
		if (this.state.error) {
			return (
				<div>Error :(</div>
			)
		}
		return (
			<form onSubmit={(e) => this.handleFormSubmit(e)}>
				<input type="text" name="name" placeholder="name" value={this.state.name} onChange={(e) => this.handleChange(e, 'name')} />
				<input type="text" name="tagline" placeholder="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e, 'tagline')} />
				<input type="text" name="description" placeholder="description" value={this.state.description} onChange={(e) => this.handleChange(e, 'description')} />
				<input type="text" name="first_brewed" placeholder="first brewed" value={this.state.first_brewed} onChange={(e) => this.handleChange(e, 'first_brewed')} />
				<input type="text" name="brewers_tips" placeholder="brewers tips" value={this.state.brewers_tips} onChange={(e) => this.handleChange(e, 'brewers_tips')} />
				<input type="number" name="attenuation_level" placeholder="attenuation level" value={this.state.attenuation_level} onChange={(e) => this.handleChange(e, 'attenuation_level')} />
				<input type="text" name="contributed_by" placeholder="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleChange(e, 'contributed_by')} />
				<button type="submit" className="btn btn-primary">Create</button>
			</form>
		)
	}
}