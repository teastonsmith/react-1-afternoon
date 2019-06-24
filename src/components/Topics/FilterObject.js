import React, { Component } from 'react';

export default class FilterObject extends Component {
	constructor(props) {
		super(props);
		this.state = {
			unFilteredArray: [
				{ name: 'Peter', title: 'CEO', age: 23 },
				{ name: 'James', title: 'CFO', age: 25 },
				{ name: 'John', title: 'CTO', age: 29 },
			],
			userInput: '',
			filteredArray: [],
		};
	}

	handleChange(val) {
		this.setState({ userInput: val });
	}

	filterArray(prop) {
		let unFiltered = this.state.unFilteredArray;
		let filtered = [];

		for (let i = 0; i < unFiltered.length; i++) {
			if (unFiltered[i].hasOwnProperty(prop)) {
				filtered.push(unFiltered[i]);
			}
		}
		this.setState({ filteredArray: filtered });
	}

	render() {
		return (
			<div className='puzzleBox filterObjectPB'>
				<h4 value='Filter Object' />
				<span className='puzzleText'>
					Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}
				</span>
				<input
					type='text'
					className='inputLine'
					onChange={this.state.userInput}
				/>
				<button className='confirmationButton' onClick={() => {}} />
				<span className='resultsBox filterObjectRB'>
					Filtered: {JSON.stringify(this.StaticRange.filteredArray, null, 10)}
				</span>
			</div>
		);
	}
}
