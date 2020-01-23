import React, { Component } from 'react';
import BeerService from '../../services/BeerService';
import BeerInfo from './BeerInfo';

export default class BeerDetail extends Component {
	state = {
		beer: undefined,
		error: false
	}

	componentDidMount() {
		BeerService.getOne(this.props.match.params.id).then(
			beer => this.setState({ beer: beer, error: false })
		).catch(
			error => this.setState({ error: true })
		);
	}

	render() {
		if (this.state.error) {
			return (<div>:(</div>);
		} else {
			return (
				<div className="beer">
					<BeerInfo {...this.state.beer} />
				</div>);
		}
	}
}