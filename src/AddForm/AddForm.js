import React from 'react'

export default props => {

	return (

		<div className='input-group mb-3 mt-3'>
		<form onSubmit={()=>props.submitAddData}>
			<input 
				type = 'text'
				name = 'id'
				value={props.addedId}
				className = 'form-control'
				placeholder = 'ID'
				onChange = {()=>props.valueHandleChange}
			/>
			<input 
				
				type = 'text'
				name = 'firstName'
				value={props.addedFirstName}
				className = 'form-control'
				placeholder = 'First Name'
				onChange = {()=>props.valueHandleChange}
			/>
			<input
				 
				type = 'text'
				name = 'lastName'
				value={props.addedLastName}
				className = 'form-control'
				placeholder = 'Last Name'
				onChange = {()=>props.valueHandleChange}
			/>
			<input
				 
				type = 'email'
				name = 'email'
				value={props.addedEmail}
				className = 'form-control'
				placeholder = 'Email'
				onChange = {()=>props.valueHandleChange}
			/>
			<input

				type = 'phone'
				name = 'phone'
				value={props.addedPhone}
				className = 'form-control'
				placeholder = 'Phone'
				onChange = {()=>props.valueHandleChange}
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