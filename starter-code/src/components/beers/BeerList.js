import React, { Component } from 'react';
import BeerService from '../../services/BeerService';
import { Link } from 'react-router-dom';

export default class BeerList extends Component {
	state = {
		beers: [],
		error: false
	}

	componentDidMount() {
		BeerService.list().then(
			beers => this.setState({ beers: beers, error: false })
		).catch(
			error => this.setState({ error: true })
		);
	}

	handleChange(e) {
		BeerService.search(e.target.value).then(
			beers => this.setState({ beers: beers, error: false })
		).catch(
			error => this.setState({ error: true })
		);
	}

	render() {
		if (this.state.error) {
			return (<div>:(</div>);
		} else {
			const beerComps = this.state.beers.map(
				(beer, index) =>
					<Link to={`/${beer._id}`} key={index} style={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', margin: '5px' }}>
						<img src={beer.image_url} style={{ height: '100px' }} alt="Beer" />
						<div>
							<h3>{beer.name}</h3>
							<p>{beer.tagline}</p>
							<p>Contributed by: {beer.contributed_by}</p>
						</div>
					</Link>
			);
			return (<div className="beer-list">
				<input type="text" onChange={(e) => this.handleChange(e)} placeholder="busca"></input>
				{beerComps}
			</div>);
		}
	}
}