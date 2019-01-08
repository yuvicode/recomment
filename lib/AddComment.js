import React, { Component } from 'react';
class AddComment extends Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
  }
  onKeyPress(e){
    if(e.charCode === 13 && e.target.value.trim().length > 0){
      this.props.addComment(e.target.value)
      e.target.value = ''
    }
  }
  render(){
    return (<div className={'comment-add'}><input type='text' placeholder='Add comment' onKeyPress={this.onKeyPress}/></div>)
  }
}
export default AddComment
