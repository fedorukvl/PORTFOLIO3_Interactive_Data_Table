import React from 'react'

export default props => {
	return (
		<div className="input-group-prepend">
            <button onClick={()=>props.onChoose()}className="btn btn-outline-secondary"> Add data </button>
        </div>
	)
}