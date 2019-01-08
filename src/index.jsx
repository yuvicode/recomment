import {Component} from "react";
import PropTypes from "prop-types";

class CommentItem extends Component {
  constructor (props) {
    super(props)
  }
  render(){
    return (<div className={'comment'}> <span>{this.props.comment.text}</span> </div>)
  }
}
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