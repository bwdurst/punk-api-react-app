import React from 'react';
import './Beer.css'

class Beer extends React.Component {
  state = {
    liked: false
  }

  likeHandler() {
    let likeStatus = !this.state.liked
    this.setState({ liked: likeStatus })
  }

  render() {

    let likedStyle = this.state.liked ? "liked" : "notLiked"
    let likedText = this.state.liked ? "Liked! :)" : "Click to like"

    return (
      <div className={"beerContainer " + likedStyle}>
        <div className="Beer">
          <h3>{this.props.name}</h3>
          <h5>{this.props.tagline}</h5>
          <p>{this.props.description}</p>
        </div>
        <img src={this.props.image} alt="No img"/>
        <button onClick={() => this.likeHandler()}>{likedText}</button>
      </div>
    )
  }
}

export default Beer;