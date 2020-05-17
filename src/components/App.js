import React, { Component } from 'react';
import CardList from '../CardList';
import SearchBox from '../SearchBox';
import ErrorBoundry from '../components'
import Scroll from '../Scroll';

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
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		if (this.state.robots.length === 0) {
			return <h1>Loading...</h1>
		} else {
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
		}
	}
}

export default App;

/*
class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		const filteredRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().include(this.state.searcfield.toLowerCase());
		})
		console.log(filteredRobots);
	}

	render() {
	return (
		<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList robots={this.state.robots} />
		</div>
	);
	}
}
*/