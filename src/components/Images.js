import React, { Component } from 'react'
import { colorPalletes } from '../constants'
export default class Images extends Component {
  renderImages = () => {
    const { images, themeNumber } = this.props
    return images.map((image, i) => {
      return (
        <div
          key={i}
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '250px',
            width: '400px',
            margin: '.5rem',
            border: `1px solid ${colorPalletes[themeNumber].primaryColor}`,
            borderRadius: '.25rem'
          }}
        />
      )
    })
  }
  render() {
    return (
      <div
        style={{
          marginTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {this.renderImages()}
      </div>
    )
  }
}
