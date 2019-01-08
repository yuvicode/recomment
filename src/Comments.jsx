import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CommentItem from './CommentItem'
import AddComment from './AddComment'
class Comments extends Component {
  constructor (props) {
    super(props)
    this.addComment = this.addComment.bind(this);
  }
  addComment(text){
    this.props.onAddComment({text})
  }
  render(){
    let count = 1
    const comments = this.props.comments ? this.props.comments.map( item => <CommentItem key={count++} comment={item}/>): []
    return (<div className={'comments'}>
      <div className={'comments-title'}>Comments:</div><div>{( comments &&comments.length) ? comments : 'Be the first to comment!'}</div>
      <div>
        <AddComment addComment={this.addComment} />
      </div>
    </div>)
  }
}

Comments.propTypes = {
  comments: PropTypes.array,
  onAddComment: PropTypes.func
}
export default Comments
