import React from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../../store/actions';
import uuidv1 from "uuid";

const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: article => dispatch(addArticle(article)),
  }
}

class ConnectedForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit (e) {
    e.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({title, id});
    this.setState({title: ''});
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input 
            type='text'
            className='form-control'
            id='title'
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type='submit' className='btn btn-success btn-lg'>Save</button>
      </form>
    )
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;