import React from 'react';
import axios from 'axios';
import Display from './Display.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element:
        { "productid": 232, "name": "Incredible Frozen Cheese", "brand": "Nite Ize", "item": 67811, "color": "ivory", "rating": "0.8", "price": "896.00", "size": "L", "images": ["http://lorempixel.com/640/480", "http://lorempixel.com/640/480", "http://lorempixel.com/640/480", "http://lorempixel.com/640/480", "http://lorempixel.com/640/480", "http://lorempixel.com/640/480"], "description": "Awesome Frozen Keyboard" }
    };
    this.getOne = this.getOne.bind(this);
  }

  componentDidMount() {
    this.getOne(Math.floor(Math.random() * 100));
  }

  getOne(productId) {
    axios
      .get(`http://localhost:3333/pg/${productId}`)
      .then((res) => {
        // uncomment the line below if your data is using Mongo arrays, in order to fix the format: 
        // res.data.images = res.data.images[0].replace(/\[/, '').replace(/\]/, '').split(',');
        this.setState({
          element: res.data
        }, () =>
          console.log(this.state))
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className=".KL-body">
        {this.state.element && <Display element={this.state.element} />}
      </div>
    )
  }
}

export default App;