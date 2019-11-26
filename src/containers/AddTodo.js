    
import React ,{Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action'

class AddTodo extends Component  {
  constructor(props){
    super(props);
    this.state={
      input: ""
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const input = this.input;
    if (!input.value.trim()) {
      return;
    }

    this.props.adddo(input.value);
    input.value = '';
  }

  handleInput = (node) => {
    this.input = node;
  }

  render(){
    return (
        <form onSubmit={this.handleSubmit} style={{overflow:'hidden'}}>
          <input ref={this.handleInput} />
          <button type="submit">
            点一下加身价10W
          </button>
        </form>
    )
  }
}
const mapDispatchProps = (dispatch) => {
  return ({
      adddo: (text) => {
        dispatch(addTodo(text));
      }
  })
}

export default connect(null,mapDispatchProps)(AddTodo)