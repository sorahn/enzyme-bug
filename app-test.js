import React, { PropTypes } from 'react'
import { mount, shallow } from 'enzyme'

import { App } from './components'
import i18n from './i18next'

const context = { i18n }

describe('<App />', () => {
  it('should shallow render', () => {
    shallow(<App />, { context }).html()
  })
})
