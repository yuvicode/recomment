import React, { Component } from 'react';
class CommentItem extends Component {
  constructor (props) {
    super(props)
  }
  render(){
    return (<div className={'comment'}> <span>{this.props.comment.text}</span> </div>)
  }
}
export default CommentItem
