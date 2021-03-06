import React, { useCallback } from "react";
import PropTypes from "prop-types";

export default (props) => {
	const { valueHandleChange, submitAddData } = props;

	const handleSubmitAddData = useCallback((e) => submitAddData(e), [
		submitAddData,
	]);
	const handleOnChange = useCallback((e) => valueHandleChange(e), [
		valueHandleChange,
	]);
	return (
		<div className="input-group mb-3 mt-3">
			<form onSubmit={handleSubmitAddData}>
				<input
					required
					type="text"
					name="id"
					value={props.addedId}
					className="form-control"
					placeholder="ID"
					onChange={handleOnChange}
				/>
				<input
					required
					type="text"
					name="firstName"
					value={props.addedFirstName}
					className="form-control"
					placeholder="First Name"
					onChange={handleOnChange}
				/>
				<input
					required
					type="text"
					name="lastName"
					value={props.addedLastName}
					className="form-control"
					placeholder="Last Name"
					onChange={handleOnChange}
				/>
				<input
					required
					type="email"
					name="email"
					value={props.addedEmail}
					className="form-control"
					placeholder="Email"
					onChange={handleOnChange}
				/>
				<input
					required
					type="phone"
					name="phone"
					value={props.addedPhone}
					className="form-control"
					placeholder="Phone"
					onChange={handleOnChange}
				/>
				<div className="input-group-prepend">
					<button className="btn btn-outline-secondary" type="submit">
						Add data to table
					</button>
				</div>
			</form>
		</div>
	);
};
AddForm.propTypes = {
	submitAddData: PropTypes.func,
	valueHandleChange: PropTypes.func,
	addedId: PropTypes.string,
	addedFirstName: PropTypes.string,
	addedLastName: PropTypes.string,
	addedEmail: PropTypes.string,
	addedPhone: PropTypes.string,
};
