import React, { Component } from "react";
import ComponentF from "./ComponentF";
import ComponentZ from "./hooks/ComponentZ";

export default class ComponentE extends Component {
	render() {
		return (
			<div>
                <ComponentF />
                <ComponentZ />
			</div>
		);
	}
}
