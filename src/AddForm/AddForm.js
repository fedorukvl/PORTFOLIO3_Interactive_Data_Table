import React, {useState} from 'react'

export default props => {

	const [addedValue,setAddedValue] = useState('');

	const valueHandleChange = e =>(
		console.log(e.target.value)
	)

	return (

		<div className='input-group mb-3 mt-3'>
			<input 
				type = 'text'
				name = 'idForm'
				className = 'form-control'
				placeholder = 'ID'
				onChange = {valueHandleChange()}
			/>
			<input 
				type = 'text'
				name = 'firstNameForm'
				className = 'form-control'
				placeholder = 'First Name'
			/>
			<input 
				type = 'text'
				name = 'secondNameForm'
				className = 'form-control'
				placeholder = 'Second Name'
			/>
			<input 
				type = 'text'
				name = 'email'
				className = 'form-control'
				placeholder = 'Email'
			/>
			<input 
				type = 'text'
				name = 'phone'
				className = 'form-control'
				placeholder = 'Phone'
			/>
			<div className="input-group-prepend">
                 <button 
                    className="btn btn-outline-secondary"
                    >Add data to table</button>
            </div>
		</div>
	) 
}