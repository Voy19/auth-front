import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import LoginForm from "./routes/LoginForm";
import RegistrationForm from "./routes/RegistrationForm";
import AssesmentForm from "./routes/AssesmentForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const RegFormParent = styled.div`
	width: 500px;
	display: flex;
	justify-content: center;
	border: 1px solid lightblue;
	border-radius: 4px;
	@media (max-width: 768px) {
		margin-top: 40px;
		flex-direction: column;
		width: 70vw;
	}
`;

export default class App extends Component {
	render() {
		return (
			<Router>
				<RegFormParent>
					<Switch>
						<Route path="/login">
							<LoginForm />
						</Route>
						<Route path="/registration">
							<RegistrationForm />
						</Route>
						<Route path="/assesments">
							<AssesmentForm />
						</Route>
					</Switch>
				</RegFormParent>
			</Router>
		);
	}
}
