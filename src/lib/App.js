import React, { Component } from 'react'
import './css/App.css'
import Button from 'antd/es/button'
class App extends Component {
  constructor(props) {
    super(props)
    console.log('reactWidget constructor called with props:', props)
  }

  render() {
    return (
      <div className="reactWidget__secondary_container">
        <div id="demo-widget">
          <Button type="primary">Button</Button>
        </div>
      </div>
    )
  }
}

export default App
