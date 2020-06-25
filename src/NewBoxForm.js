import React, { Component } from 'react';
import uuid from 'uuid/v4';

class NewBoxForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: '',
			height: '',
			color: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		const newBox = { ...this.state, id: uuid() };
		this.props.createBox(newBox);
		this.setState({
			width: '',
			height: '',
			color: ''
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="height">Height: </label>
					<input
						type="text"
						id="height"
						value={this.state.height}
						name="height"
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<label htmlFor="width">Width: </label>
					<input type="text" id="width" value={this.state.width} name="width" onChange={this.handleChange} />
				</div>
				<div>
					<label htmlFor="color">Color: </label>
					<input type="text" id="color" value={this.state.color} name="color" onChange={this.handleChange} />
				</div>
				<button>Submit</button>
			</form>
		);
	}
}

export default NewBoxForm;
