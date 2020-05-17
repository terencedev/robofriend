import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import Scroll from './Scroll';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}	

	//Get API
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
			return response.json(); }).then(users => 
			{this.setState({ robots: users});
		});
	}	

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	
	}

	render() {
		const {robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		if (robots.length === 0) {
			return <h1>Loading</h1>
		} 
		else {
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);
		}
	}
}


export default App;
