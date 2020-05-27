import React, { useContext } from "react";
import { UserContext } from "../userContext";

function ComponentZ() {
	const context = useContext(UserContext);

	return (
		<div>
			<h1>Component Z (using useContext hook)</h1>
			<p>Context value with hook: {JSON.stringify(context)}</p>
		</div>
	);
}

export default ComponentZ;
