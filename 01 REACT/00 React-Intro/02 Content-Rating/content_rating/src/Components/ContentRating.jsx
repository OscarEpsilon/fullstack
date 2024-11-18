
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1
        }));
      },
      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1
        }));
    }
  }
}
  render() {
    return (
      <div className='content-rating'>
      <p>
      Thing to like or dislike
      </p>
      <div className='rating-buttons'>
      <button className="like-button" onClick={this.state.handleLike}>
          Like ({this.state.likes})
        </button>
        <button className="dislike-button" onClick={this.state.handleDislike}>
          Dislike ({this.state.dislikes})
        </button>
      </div>
      <p>Total Ratings: ({this.state.likes+this.state.dislikes})</p>
  </div>
    );
  }
}

export default ContentRating;
