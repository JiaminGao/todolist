import React, {Component} from 'react';
import Todoitem from './Todoitem';

class Todolist extends Component{

  constructor(props){
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleBtnClick(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })

  }

  handleDelete(index){
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  getTodoItems(){
    return(
      this.state.list.map((item, index) => {
        return (
        <Todoitem 
          delete={this.handleDelete} 
          key={index} content={item} index={index}
        />
      );
    })
    )
  }

  render(){
    return(    
    <div>
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputChange}/>
        <button onClick={this.handleBtnClick}>add</button>
      </div>
      <ul>{this.getTodoItems()}</ul>
      </div>);
  }
}
export default Todolist;