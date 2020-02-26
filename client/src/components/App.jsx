import React from 'react';
import axios from 'axios';
import Display from './Display.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element:'',
      // productId: window.location.pathname.slice(1,-1)
    };

    // this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
  }

  // componentDidMount() {
  //   this.getAll();
  // }

  //pass in an id route
  componentDidMount() {
    // var id = window.location.href.slice(22);
    // if (id === '') { id = 1 }
    this.getOne(Math.floor(Math.random() * 100));
  }

  // getAll() {
  //   axios
  //     .get('/api/products')
  //     .then((res) => {
  //       this.setState({
    //         elements: res.data
    //       }, () => console.log(this.state.products))
    //     })
    //     .catch(err => console.error(err))
    // }
    
    //window.location.pathname
    getOne(productId) {
      axios
      .get(`http://localhost:3333/pg/${productId}`)
      .then((res) => {
// use this line with Mongo arrays  // res.data.images = res.data.images[0].replace(/\[/, '').replace(/\]/, '').split(',');
        this.setState({
          element: res.data
        }, () => 
      console.log(this.state))
      })
      .catch(err => console.error(err))
  }

  render() {
    return(
      <div className=".KL-body">
        {this.state.element && <Display element={this.state.element}/>}
      </div>
    )
  }
}

export default App;