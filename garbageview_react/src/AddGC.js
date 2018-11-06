import React, { Component } from 'react'

class AddGC extends Component {
  state = {
    gctype: null,
    gctime: null,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addGC(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="gctype">GCType:</label>
          <input type="text" id="gctype" onChange={this.handleChange} />
          <label htmlFor="gctime">GCTime:</label>
          <input type="text" id="gctime" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddGC;