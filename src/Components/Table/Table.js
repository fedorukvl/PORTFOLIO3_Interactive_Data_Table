import React, { useCallback  } from 'react'
import style from './Table.module.css'
export default (props) => {
	const { doSort,onRowSelect} = props

	const handleClick = useCallback((e) => doSort(e.currentTarget.id), [doSort])

	const handleRowSelect = item => () => onRowSelect(item)

	return (
	<table className="table">
	    <thead>
	        <tr >
	            <th id={'id'} onClick={handleClick} >ID {props.sortField === 'id' ? <small>&or;</small> : <small>&and;</small>}</th>
	            <th id={'firstName'} onClick={handleClick} >First Name {props.sortField === 'firstName' ? <small>&or;</small> : <small>&and;</small>}</th>
	            <th id={'lastName'} onClick={handleClick} >Last Name {props.sortField === 'lastName' ? <small>&or;</small> : <small>&and;</small>}</th>
	            <th id={'email'} onClick={handleClick} >E-mai{handleClick}l {props.sortField === 'email' ? <small>&or;</small> : <small>&and;</small>}</th>
	            <th id={'phone'} onClick={handleClick} >Phone {props.sortField === 'phone' ? <small>&or;</small> : <small>&and;</small>}</th>
	        </tr>
	    </thead>
	    <tbody className={style.table}>
	        {props.data.map((item) => (
	            <tr key={item.id+item.phone} onClick={handleRowSelect(item)}>
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
};