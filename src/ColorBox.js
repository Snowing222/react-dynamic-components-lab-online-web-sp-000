import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        { const newValue = this.props.value ;
         return this.props.value < 0.2 ? null : ( <div>
        <ColorBox opacity={newValue} />
      </div>)}
      </div>
    )
  }

}

