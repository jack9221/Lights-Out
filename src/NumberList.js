import React, { Component } from 'react';
import NumberItem from './NumberItem';

class NumberList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nums: [ 1, 2, 3, 4, 5 ]
		};
		this.remove = this.remove.bind(this);
	}

	remove(num) {
		this.setState((st) => ({
			nums: st.nums.filter((n) => n !== num)
		}));
	}

	render() {
		let list = this.state.nums.map((n) => <NumberItem value={n} remove={this.remove} />);
		return <ul>{list}</ul>;
	}
}

export default NumberList;
