import React from 'react';
import {smallUrl,bigUrl} from '../../constants.js'
export default props =>{
    return (
        <div >
            <button onClick={()=>props.onSelect(smallUrl)} className="btn btn-success">32 элемента</button>
            <button onClick={()=>props.onSelect(bigUrl)} className="btn btn-danger">1000 элементов</button>
        </div>
    )
}