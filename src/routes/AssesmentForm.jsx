import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "../lib/api";

export default class AssesmentForm extends Component {
	state = {
		users: [],
		userId: "",
		level: ""
	};

	getAllUsers = () => {
		const jwt = localStorage.getItem("jwtToken");
		console.log(jwt);

		if (jwt) {
			axios({ method: "get", url: "/assesments", headers: { Authorization: `Bearer ${jwt}` } })
				.then((res) => console.log("18", res.data))
				.then((data) => console.log("19", data));

			axios({ method: "get", url: "/users", headers: { Authorization: `Bearer ${jwt}` } }).then((res) => {
				const users = res.data.map((user) => {
					return {
						id: user.id,
						name: user.name,
						surname: user.surname,
						level: user.level
					};
				});
				this.setState({
					users: users
				});
			});
		}
	};

	componentDidMount() {
		this.getAllUsers();
	}

	onChange = (e) => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	};

	handleUser = (e) => {
		this.setState({
			userId: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const jwt = localStorage.getItem("jwtToken");

		const data = {
			userId: this.state.userId
		};

		axios({
			method: "post",
			url: "/assesments",
			data: data,
			headers: { Authorization: `Bearer ${jwt}` }
		}).then((res) => console.log(res.data));
	};

	render() {
		const { users, userId } = this.state;
		return (
			<div>
				<div>Create assesment</div>
				<form onSubmit={this.onSubmit}>
					<select value={userId} onChange={this.handleUser}>
						{users.map((item) => {
							return (
								<option key={item.id} value={item.id}>
									{`${item.name} ${item.surname}`}
								</option>
							);
						})}
					</select>
					<button type="submit">Create assesment</button>
				</form>
			</div>
		);
	}
}
