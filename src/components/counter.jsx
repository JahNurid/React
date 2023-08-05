import React, { Component } from "react";

class Counter extends Component {

 
 formatCount(){
  const {value} = this.props.counter;
  return value === 0 ? 'Zero' : value ;
 }
 

/* constructor(){
  super();
  this.handleIncrement = this.handleIncrement.bind(this);
} */

  render() {
     
    return (
      <div>
        
        <span  className={ this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
        onClick={ () => this.props.onIncrement(this.props.counter)} 
        className="btn btn-secondary btn-sm"
        >Increment
        </button>
       {/*  <span>{this.state.tags.length === 0  && 'plase create a new tag'}</span>
        <span> {this.renderTags()} </span> */}
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }
}




export default Counter;
