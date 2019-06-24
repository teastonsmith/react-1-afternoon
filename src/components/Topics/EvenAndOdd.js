import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			evenArray: [],
			oddArray: [],
			userInput: '',
		};
	}

	handleChange(val) {
		this.setState({ userInput: val });
	}

	assignEvenAndOdds(userInput) {
		// for (let i = 0; i < userInput.length; i++) {
		// 	if (userInput[i] % 2 === 0) {
		// 		let evenArrayOutput = userInput[i].split(',', userInput.length);
		// 		return evenArrayOutput.push(this.state.evenArray);
		// 	} else {
		// 		let oddArrayOutput = userInput[i].split(',', userInput.length);
		// 		return oddArrayOutput.push(this.state.oddArray);
		// 	}
		// }
		// console.log(this.evenArray);
		// console.log(this.oddArray);
		let arr = userInput.split(',');
		let evens = [];
		let odds = [];

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				evens.push(parseInt(arr[i], 10));
			} else {
				odds.push(parseInt(arr[i], 10));
			}
		}
		this.setState({ evenArray: evens, oddArray: odds });
	}

	render() {
		return (
			<div className='puzzleBox evenAndOddPB'>
				<h4 value='Evens and Odds' />
				<input
					type='text'
					className='inputLine'
					onChange={e => this.handleChange(e.target.value)}
				/>
				<button
					className='confirmationButton'
					onClick={() => {
						this.assignEvenAndOdds(this.state.userInput);
					}}>
					Split
				</button>
				<span className='resultsBox'>
					Evens: {JSON.stringify(this.state.evenArray)}
				</span>
				<span className='resultsBox'>
					Odds: {JSON.stringify(this.state.oddArray)}
				</span>
			</div>
		);
	}
}
