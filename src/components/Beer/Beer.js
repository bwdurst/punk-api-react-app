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

    const beer = this.props.props;

    let likedStyle = this.state.liked ? "liked" : "notLiked"
    let likedText = this.state.liked ? "Liked! :)" : "Click to like"

    return (
      <div className={"beerContainer " + likedStyle}>
        <div className="Beer">
          <h3>{beer.name}</h3>
          <h5>{beer.tagline}</h5>
          <p>First Brewed: {beer.first_brewed}</p>
          <p>{beer.description}</p>
          <p>ABV: {beer.abv}</p>
          <p>IBU: {beer.ibu}</p>
          <p>Target FG: {beer.target_fg}</p>
          <p>Target OG: {beer.target_og}</p>
          <p>EBC: {beer.ebc}</p>
          <p>SRM: {beer.srm}</p>
          <p>PH: {beer.ph}</p>
          <p>Attenuation Level: {beer.attenuation_level}</p>
          <p>Volume: {beer.volume.value} litres</p>
          <p>Food pairing: {beer.food_pairing.join(". ")}</p>
          {/* <p>Boil Volume: {beer.boil_volume.value} litres</p> */}
          {/* <h4>Method</h4> */}
          {/* <p>Mash Temp: {beer.method.mash_temp[0].temp.value}c</p> */}
          {/* <p>Mash Duration: {beer.method.mash_temp[0].duration}</p> */}
          {/* <p>Fermentation Temp: {beer.method.fermentation.temp.value}c</p> */}
          {/* <p>Brewer's Tips: {beer.ph}</p> */}
        </div>
        <img src={beer.image_url} alt="No img"/>
        <button onClick={() => this.likeHandler()}>{likedText}</button>
      </div>
    )
  }
}

export default Beer;