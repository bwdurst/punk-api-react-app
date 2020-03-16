import React from 'react';
import Beer from '../Beer/Beer'
import './BeerList.css'

class BeerList extends React.Component {
  state = {
    beers: []
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ beers: data })
        // console.log(this.state.beers);
      });
  }

  render() {
    const beers = this.state.beers.map(beer => (
      <Beer
        key={beer.id}
        props={beer}
      />
    ))

    return (
      <div className="BeerList">
        <h1>Punk Beers</h1>
        {beers}
      </div>
    )
  }
}

export default BeerList;