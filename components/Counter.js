import React from 'react';
import * as firebase from 'firebase';

const Spinner = () => (<p>Loading...</p>)

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      clicks: null,
    }
    this.handleClick = this.handleClick.bind(this);
    this.counterRef = firebase.database().ref('counter');
  }

  componentDidMount() {
    this.counterRef.on('value', (snapshot) => {
      console.log("[INFO]", 'CounterRef value event')
      const clicks = snapshot.val()
      this.setState({ clicks })
    });

  }

  handleClick(e) {
    e.preventDefault()
    const newCount = ++this.state.clicks
    this.counterRef.set(newCount);
  }

  render() {
    return this.state.clicks === null ? <Spinner /> : (
      <div className="my-counter" onClick={this.handleClick}>
        <h1>clicks: { this.state.clicks }</h1>
      </div>
    )
  }
}
