import React from 'react'

export default (props) => (
	<table className="table">
	    <thead>
	        <tr>
	            <th onClick={props.doSort.bind(null, 'id')} >ID</th>
	            <th onClick={props.doSort.bind(null, 'firstName')} >First Name</th>
	            <th onClick={props.doSort.bind(null, 'lastName')} >Last Name</th>
	            <th onClick={props.doSort.bind(null, 'email')} >E-mail</th>
	            <th onClick={props.doSort.bind(null, 'phone')} >Phone</th>
	        </tr>
	    </thead>
	    <tbody>
	        {props.data.map(item => (
	            <tr key={item.id+item.phone}>
	                <td>{item.id}</td>
	                <td>{item.firstName}</td>
	                <td>{item.lastName}</td>
	                <td>{item.email}</td>
	                <td>{item.phone}</td>
	            </tr>
	        ))}
	    </tbody>
	</table>
)