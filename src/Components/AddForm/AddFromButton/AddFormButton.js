import React from "react";
import PropTypes from "prop-types";

export default (props) => {
	return (
		<div className="input-group-prepend">
			<button
				onClick={() => props.onChoose()}
				className="btn btn-outline-secondary"
			>
				{" "}
				Add data{" "}
			</button>
		</div>
	);
};
AddFormButton.propTypes = {
	onChoose: PropTypes.func,
};
