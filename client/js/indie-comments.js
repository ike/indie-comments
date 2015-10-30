var ipfsAPI = require('ipfs-api');
var React = require('react');
var ReactDOM = require('react-dom');

class Comment extends React.Component {
    render(){
        return (
            <div className='comment'>
                <div className='comment-body'>
                    {this.props.children}
                </div>
                <div className='comment-author'>
                    {this.props.author}
                </div>
            </div>
        );
    }
}

class CommentList extends React.Component {
    render(){
        return (
            <div className='comment-list'>
                {this.props.comments.map(function(comment){
                    return (
                        <Comment author={comment.author} key={comment.id}>
                            {comment.text}
                        </Comment>
                    );
                })}
            </div>
        );
    }
}

class CommentForm extends React.Component {
    handleSubmit(e){
        e.preventDefault();
        var author = ReactDOM.findDOMNode(this.refs.author).value.trim();
        var text = ReactDOM.findDOMNode(this.refs.text).value.trim();
        var form = ReactDOM.findDOMNode(this.refs.form);

        this.props.onSubmit({ author: author, text: text })
        form.reset();
    }
    render(){
        // ref allows us to refer to the component instance by name
        return (
            <form className='comment-form' ref='form' onSubmit={e => this.handleSubmit(e)}>
                <input type='text' placeholder='Your name' ref='author'/>
                <textarea  placeholder='Leave a comment...' ref='text'></textarea>
                <input type='submit' value='Add comment'/>
            </form>
        );
    }
}

class CommentBox extends React.Component {
    // constructor function recieves object of attributes + values
    constructor(props){
        super();
        this.state = {
            comments: props.comments || []
        }
    }
    loadData(props){
        // load comment hashes from server
        // load comments from ipfs
    }
    handleNewComment(comment){
        var comments = this.state.comments;
        var newComments = comments.concat([comment]);
        this.setState({ comments: newComments });
        
        // add comment to ipfs
        // send comment hash to server
    }
    render(){
        return (
            <div className='comment-box'>
                <h1>Comments</h1>
                <CommentList comments={this.state.comments} />
                <CommentForm onSubmit={comment => this.handleNewComment(comment) } />
            </div>
        );
    }
}

commentBox = ReactDOM.render(
    <CommentBox slug="comments.json"/>,
    document.getElementById('indie-comments')
);