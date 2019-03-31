import React, { PureComponent } from 'react'
import { colors } from '../constants'

export default class UploadForm extends PureComponent {
  render() {
    const { handleSubmit, handleChange } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input type="text" name="title" placeholder="Title" />
        </label>
        <label>
          Attribution
          <input type="text" name="attribution" placeholder="Attribution" />
        </label>
        Notes
        <label>
          {' '}
          <input type="text" name="notes" placeholder="Notes" />
        </label>
        <label>
          Live
          <input type="checkbox" name="live" placeholder="Live" />
        </label>
        <label>
          {/* <button
            style={{
              color: colors[1].outerSpace,
              backgroundColor: colors[1].honeyDew,
              height: '1.25rem',
              borderStyle: 'solid',
              borderWidth: '1px',
              borderRadius: '0.25rem',
              fontWeight: '300',
              textAlign: 'center',
              userSelect: 'none',
              outline: '0'
            }}
          >
            Upload
          </button> */}
          <input
            onChange={handleChange}
            name="url"
            type="file"
            accept=".jpg, .jpeg, .png, .gif"
            // style={{ display: 'none' }}
          />
        </label>
        <div>
          <button type="submit">Submit Image</button>
        </div>
      </form>
    )
  }
}
