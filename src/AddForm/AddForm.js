import React, { useCallback } from 'react'

export default props => {
	const { valueHandleChange, submitAddData } = props

	const handleSubmitAddData = useCallback((e) => submitAddData(e), [submitAddData]) 
	const handleOnChange = useCallback((e) => valueHandleChange(e), [valueHandleChange])
	return (

		<div className='input-group mb-3 mt-3'>
		<form onSubmit={handleSubmitAddData}>
			<input 
				type = 'text'
				name = 'id'
				value={props.addedId}
				className = 'form-control'
				placeholder = 'ID'
				onChange = {handleOnChange}
			/>
			<input 
				
				type = 'text'
				name = 'firstName'
				value={props.addedFirstName}
				className = 'form-control'
				placeholder = 'First Name'
				onChange = {handleOnChange}
			/>
			<input
				 
				type = 'text'
				name = 'lastName'
				value={props.addedLastName}
				className = 'form-control'
				placeholder = 'Last Name'
				onChange = {handleOnChange}
			/>
			<input
				 
				type = 'email'
				name = 'email'
				value={props.addedEmail}
				className = 'form-control'
				placeholder = 'Email'
				onChange = {handleOnChange}
			/>
			<input

				type = 'phone'
				name = 'phone'
				value={props.addedPhone}
				className = 'form-control'
				placeholder = 'Phone'
				onChange = {handleOnChange}
			/>
			<div className="input-group-prepend">
                 <button 
                    className="btn btn-outline-secondary"
                    type='submit'
                    >Add data to table</button>
            </div>
            </form>
		</div>
	) 
}