import React,{ Component } from 'react';
import _ from 'lodash';
import Loader from './Loader/Loader.js'
import Table from './Table/Table.js'
import RowData from './RowData/RowData.js'
import DataSize from './DataSize/DataSize.js'
import SearchForm from './SearchForm/SearchForm.js'
import ReactPaginate from 'react-paginate';
import AddForm from './AddForm/AddForm.js'
import AddFormButton from './AddForm/AddFromButton/AddFormButton.js'

class App extends Component {

	state = {
		isDataSizeSelected: false,
		isDataLoading: false,
		isAddedDataClicked: false,
		data: [],
		sort: 'asc',
		sortField: 'id',
		row: null,
		currentPage: 0,
		search: '',
	}

	async fetchData(url) {                    //componentDidMount
		this.setState({isDataLoading:true})
		const response = await fetch(url);
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
  		this.setState({
      		isDataSizeSelected: true,
      		isDataLoading: true,
    	})
    	this.fetchData(url)
  	}

  	pageChangeHandler = ({selected}) => (
  		this.setState({currentPage:selected})
  	) 

  	searchHandler = (search) =>(
  		this.setState({search,currentPage: 0})
  	)

  	getFilteredData(){
	    const {data, search} = this.state

	    if (!search) {
	      return data
	    }
	   	var result = data.filter(item => {
	    	return (
	       		item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
	       		item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
	       		item["email"].toLowerCase().includes(search.toLowerCase())
	    	);
	   	});
	   	if(!result.length){
	    	result = this.state.data
	   	}
	    return result
  	}
  	showAddedData=()=>{
  		this.setState({isAddedDataClicked:true})
  	}

	render() {

		const pageSize = 50;
		const filteredData = this.getFilteredData()
		const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];
		const pageCount = Math.ceil(filteredData.length / pageSize);

		if(!this.state.isDataSizeSelected){
			return(
				<div>
					<DataSize onSelect={this.selectDataSize}/>
				</div>
			)
		}

	  return (

	    <div className="container">
	    	{
	    		this.state.isDataLoading
	    			? <Loader/>
	    			: 	<React.Fragment>
	    				<SearchForm onSearch={this.searchHandler}/>
	    				{ this.state.isAddedDataClicked
	    					? <AddForm/>
	    					: <AddFormButton onChoose={this.showAddedData}/>
	    				}
	    				<Table 
		    				data={displayData} 
		    				doSort={this.doSort} 
		    				sort={this.state.sort}
	        				sortField={this.state.sortField}
	        				onRowSelect={this.onRowSelect}
        				/>
        				</React.Fragment>
	    	}

	    	{
	    		this.state.row
	    			? <RowData user={this.state.row}/>
	    			: null
	    	}

	    	{
		        this.state.data.length > pageSize
		        ? <ReactPaginate
			        previousLabel={'<'}
			        nextLabel={'>'}
			        breakLabel={'...'}
			        breakClassName={'break-me'}
			        pageCount={pageCount}
			        marginPagesDisplayed={2}
			        pageRangeDisplayed={5}
			        onPageChange={this.pageChangeHandler}
			        containerClassName={'pagination'}
			        activeClassName={'active'}
			        pageClassName="page-item"
			        pageLinkClassName="page-link"
			        previousClassName="page-item"
			        nextClassName="page-item"
			        previousLinkClassName="page-link"
			        nextLinkClassName="page-link"
			        forcePage={this.state.currentPage}
		      	/> 
		      	: null
      		}

	    </div>
	  );
	}
}

export default App;
