import React,{ Component } from 'react';
import _ from 'lodash';
import Loader from './Loader/Loader.js'
import Table from './Table/Table.js'
import RowData from './RowData/RowData.js'
import DataSize from './DataSize/DataSize.js'

class App extends Component {

	state = {
		isDataSizeSelected: false,
		isDataLoading: false,
		data: [],
		sort: 'asc',
		sortField: 'id',
		row: null,
	}

	async componentDidMount() {
		this.setState({isDataLoading:true})
		const response = await fetch('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D');
		const data = await response.json();
		this.setState({
			isDataLoading: false,
			data: _.orderBy(data, this.state.sortField, this.state.sort)
		})
	}

	doSort = (sortField) => {
		const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';
		const orderedData = _.orderBy(this.state.data,sortField,sortType);
		this.setState({
			data: orderedData,
			sort: sortType,
			sortField
		})
	}

	onRowSelect = row => (
    	this.setState({row})
  	)

  	selectDataSize = url =>{
  		console.log(url);
  	}


	render() {
	  return (
	    <div className="container">
	    	{
	    		this.state.isDataLoading
	    			? <Loader/>
	    			: <Table 
	    				data={this.state.data} 
	    				doSort={this.doSort} 
	    				sort={this.state.sort}
        				sortField={this.state.sortField}
        				onRowSelect={this.onRowSelect}
        				/>
	    	}
	    	{
	    		<DataSize onSelect={this.selectDataSize}/>
	    	}
	    	{
	    		this.state.row
	    			? <RowData user={this.state.row}/>
	    			: null
	    	}
	    </div>
	  );
	}
}

export default App;
