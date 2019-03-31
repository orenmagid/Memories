import React, { Component } from 'react'
import { baseUrl } from '../constants'

export default class Images extends Component {
  state = { images: [] }

  componentDidMount() {
    this.fetchImages()
  }

  componentDidUpdate() {
    this.fetchImages()
  }

  fetchImages = () => {
    let token = localStorage.getItem('token')
    if (token) {
      fetch(baseUrl + '/images', {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(images => {
          this.setState({ images })
        })
    }
  }

  renderImages = () => {
    const { images } = this.state
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
            border: '1px solid black',
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
