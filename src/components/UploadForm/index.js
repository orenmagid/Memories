import React, { PureComponent } from 'react'
import styles from './styles'
import { styled } from 'styletron-react'
import PrimaryButton from '../Button/PrimaryButton'
import {
  primaryButton,
  secondaryButton,
  tertiaryButton
} from '../Button/buttonStyles'

const Form = styled('form', styles.form)
const Field = styled('label', styles.field)
const Row = styled('div', styles.row)

export default class UploadForm extends PureComponent {
  render() {
    const { handleSubmit, handleChange, themeNumber } = this.props
    return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <Field>
            Title:
            <input
              style={{ marginLeft: '.5rem' }}
              type="text"
              name="title"
              placeholder="Title"
            />
          </Field>
          <Field>
            Attribution:
            <input
              style={{ marginLeft: '.5rem' }}
              type="text"
              name="attribution"
              placeholder="Attribution"
            />
          </Field>
        </Row>
        <Row>
          <Field>
            Notes:
            <input
              style={{ marginLeft: '.5rem' }}
              type="text"
              name="notes"
              placeholder="Notes"
            />
          </Field>
          <Field>
            Live:
            <input
              style={{ marginLeft: '.5rem' }}
              type="checkbox"
              name="live"
              placeholder="Live"
            />
          </Field>
        </Row>
        <Row style={{ justifyContent: 'center' }}>
          <Field>
            <PrimaryButton style={primaryButton(themeNumber)} $as={'a'}>
              Upload
            </PrimaryButton>
            <input
              onChange={handleChange}
              name="url"
              type="file"
              accept=".jpg, .jpeg, .png, .gif"
              style={{ display: 'none' }}
            />
          </Field>
        </Row>
        <Row style={{ justifyContent: 'center' }}>
          <PrimaryButton style={secondaryButton(themeNumber)} type={'submit'}>
            Submit Image
          </PrimaryButton>
        </Row>
      </Form>
    )
  }
}
