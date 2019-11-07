import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "../lib/api";

const StyledForm = styled.div`
	padding: 25px;
	width: 75%;
	display: flex;
	flex-direction: column;
`;
const StyledInput = styled.input`
	width: 100%;
	background: transparent;
	border: none;
	border-bottom: 2px solid rgba(255, 255, 255, 0.8);
	outline: none;
	color: white;
	&::placeholder {
		color: rgba(255, 255, 255, 0.6);
	}
`;
const FormTitle = styled.h3`
	font-weight: lighter;
	font-size: 1.6rem;
	color: rgba(255, 255, 255, 0.85);
`;
const StyledText = styled.p`
	font-weight: lighter;
	font-size: 1rem;
	color: rgba(255, 255, 255, 0.85);
`;
const SubmitButton = styled.button`
	width: 100%;
	height: 34px;
	border: none;
	outline: none;
	cursor: pointer;
	font-weight: lighter;
	font-size: 1rem;
	border-radius: 4px;
	background: rgba(255, 255, 255, 0.95);
	&:hover {
		background: rgba(255, 255, 255, 0.90);
	}
	&:active {
		background: rgba(255, 255, 255, 0.80);
	}
`;

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: "",
			password: ""
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();

		const post = {
			login: this.state.login,
			password: this.state.password
		};
		axios.post("/login", post).then((res) => localStorage.setItem("jwtToken", res.data.token));
	}

	render() {
		return (
			<StyledForm>
				<FormTitle>Sign In</FormTitle>
				<br />
				<form onSubmit={this.onSubmit}>
					<StyledInput
						placeholder="Login"
						type="text"
						name="login"
						value={this.state.login}
						onChange={this.onChange}
					/>
					<br />
					<br />
					<StyledInput
						placeholder="Password"
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.onChange}
					/>
					<br />
					<br />
					<br />
					<SubmitButton type="submit">Sing In</SubmitButton>
					<br />
					<br />
					<StyledText>
						Don't have an account? <Link to={"/registration"}>Sign Up</Link>
					</StyledText>
				</form>
			</StyledForm>
		);
	}
}

export default LoginForm;
