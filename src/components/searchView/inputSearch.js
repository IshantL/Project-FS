import React, { Component} from 'react';
import Config from '../../Config';
import './inputSearch.css';


class InputSearch extends Component{

  constructor(props){
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.state = {
      searchedItems: []
    };
  }

  fetchData (value) {
    //console.log("message ", value);
    //Simplify to show data
    const list = Config[this.props.listName];
    let filterItems = list.filter((item) => {
      const valueLowercase = value.toLowerCase();
      return (item.name.toLowerCase().search(valueLowercase) >= 0 ||
              item.country.toLowerCase().search(valueLowercase) >= 0 ||
                item.city.toLowerCase().search(valueLowercase) >= 0 ||
                  item.code.toLowerCase().search(valueLowercase) >= 0);
    });
    this.setState({
      searchedItems: filterItems
    });
  }

  clickHandler (e){
    //console.log(value);
    let value = e.target.value;
    if(value.length >= 1){
      this.fetchData(value);
    }else {
      this.setState({
        searchedItems: []
      });
    }
  }

  render (){
    return(
      <div className='ui-input-search'>
        <input type='text' placeholder='Type atleast 3 letters' onChange={this.clickHandler}></input>
        <div className='ui-input-search-item'>
          <ul className="list-group">
            {this.state.searchedItems.map((item, key) => (
              <li key={key} className="list-group-item" value={item.code}>
              {item.name}-{item.country}[{item.code}]
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default InputSearch;
