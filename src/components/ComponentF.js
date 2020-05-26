import React, { Component } from "react";
import { UserConsumer } from "./userContext";

export default class ComponentF extends Component {
	render() {
		return (
			<UserConsumer>
				{(val) => {
					return (
						<div>
							<h1>Component F</h1>
							<p>Context value {JSON.stringify(val)}</p>
						</div>
					);
				}}
			</UserConsumer>
		);
	}
}
