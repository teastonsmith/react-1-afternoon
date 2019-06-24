import React, { Component } from 'react';

export default class Palindrome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: '',
			palindrome: '',
		};
	}

	isPalindrome(userInput) {
		let forwards = userInput;
		let backwards = userInput;
		backwards = backwards.split('');
		backwards = backwards.reverse('');
		backwards = backwards.join('');
		if (forwards === backwards) {
			this.setState({ palindrome: 'true' });
		} else {
			this.setState({ palindrome: 'false' });
		}
	}

	handleChange(val) {
		this.setState({ userInput: val });
	}

	render() {
		return (
			<div className='puzzleBox palindromePB'>
				<h4>Palindrome</h4>
				<input
					type='text'
					className='inputLine'
					onChange={e => this.handleChange(e.target.value)}
				/>
				<button
					className='confirmationButton'
					onClick={() => {
						this.isPalindrome(this.state.userInput);
					}}>
					Check
				</button>
				<span className='resultsBox'>{this.state.palindrome}</span>
			</div>
		);
	}
}
