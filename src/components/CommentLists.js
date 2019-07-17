import React from 'react';

class CommentLists extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(e) {
        this.props.onHandleDelete(e.target.id);
    }
    render() {
        return (
            <div className="comment-list-component">
                <label>Comment List</label>
                <ul className="list-group mb-3">
                    {
                        this.props.comments.map((comment, index)=>{
                            return (
                            <li key={index} className="list-group-item">
                                {comment}
                                <button key={index} id={index} onClick={this.handleDelete}>
                                Delete
                            </button>
                            </li>
                        )
                        })
                    }
                </ul>
            </div>
        )
};
}

export default CommentLists;