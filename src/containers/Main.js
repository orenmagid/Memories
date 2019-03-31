import React, { PureComponent } from 'react'
import { baseUrl } from '../constants'
import UploadForm from '../components/UploadForm'
import Images from '../components/Images'
import { themeColors } from '../constants'

export default class Main extends PureComponent {
  state = { file: null, images: [] }

  componentDidMount() {
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

  handleSubmit = e => {
    e.preventDefault()
    const { file } = this.state
    console.log('TCL: Main -> file', file)

    const params = {
      title: e.currentTarget.title.value,
      attribution: e.currentTarget.attribution.value,
      notes: e.currentTarget.notes.value,
      live: e.currentTarget.live.value,
      url: file
    }
    this.handlePostImage(params)
  }

  handlePostImage = params => {
    let token = localStorage.getItem('token')
    if (token) {
      fetch(baseUrl + '/images', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(image => {
          const { images } = this.state
          const newImages = images.push(image)
          this.setState({ newImages })
        })
    }
  }

  handleChange = e => {
    if (e.target.files.length > 0) {
      const reader = new FileReader()

      const file = e.target.files[0]
      console.log('TCL: Main -> file', file)

      reader.onloadend = () => {
        this.setState({ file: reader.result })
        console.log(
          'TCL: Main -> reader.onloadend -> reader.result',
          reader.result
        )
      }

      reader.readAsDataURL(file)
    }
  }

  render() {
    const { themeNumber } = this.props
    const { images } = this.state
    return (
      <>
        <UploadForm
          themeNumber={themeNumber}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Images images={images} themeNumber={themeNumber} />
      </>
    )
  }
}
