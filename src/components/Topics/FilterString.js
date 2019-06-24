import React, { Component } from 'react';

export default class FilterString extends Component {
	constructor(props) {
		super(props);
		this.state = {
			unFilteredArray: ['wordone', 'wordtwo', 'wordthree', 'wordfour'],
			userInput: '',
			filteredArray: [],
		};
	}

	filterMethod(userInput) {
		let unFiltered = this.state.unFilteredArray;
		let filteredArray = [];
		for (let i = 0; i < unFiltered.length; i++) {
			if (unFiltered[i].includes(userInput)) {
				filteredNames.push(names[i]);
			}
		}
		this.setState({ filteredArray });
	}

	render() {
		return (
			<div className='puzzleBox filterStringPB'>
				<h4>Filter String </h4>
				<span className='puzzleText'>{this.state.unFilteredArray} </span>
				<input
					type='text'
					className='inputLine'
					onChange={this.state.userInput}
				/>
				<button
					className='confirmationButton'
					onClick={() => this.filterNames(this.state.userInput)}>
					Filter
				</button>
				<span className='resultsBox filterStringRB'>
					Filtered String: {JSON.stringify(this.state.filteredArray, null, 10)}
				</span>
			</div>
		);
	}
}
