import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
 const { SearchBar, ClearSearchButton } = Search;
const defaultSorted = [{
    dataField: 'id',
    order: 'desc'
  }];

 const options = {
    //pageStartIndex: 0,
    sizePerPage: 5,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true
  };	
export const Tablebody=({colums,data,selectRow})=>{
 
  return(
         	
<ToolkitProvider
      keyField="id"
      data={data}
      columns={ colums}
      search
      
    >
      {
    props => (
              <div>
            <h3>Input something at below input field:</h3>
            <div>
            <SearchBar { ...props.searchProps } className="form-control"/>
        
            <ClearSearchButton { ...props.searchProps } className="btn btn-primary "/>
            </div>
            <hr />
            <BootstrapTable 
            bootstrap4
            bordered ={false}
            defaultSorted={ defaultSorted } 
            selectRow={ selectRow }
            pagination={ paginationFactory(options) }
              { ...props.baseProps } id="TableContent"
            />
              </div>
        )			
}
</ToolkitProvider>
    
)
}