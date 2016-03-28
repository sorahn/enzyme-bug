import React, { PropTypes } from 'react'
import { mount, shallow } from 'enzyme'
import { I18nextProvider } from 'react-i18next'

import { App } from './components'
import i18n from './i18next'

const context = { i18n }

describe('<App />', () => {
  it('should shallow render', () => {
    shallow(<App />, { context }).html()
  })

  it('doesn\'t work this way either', () => {
    shallow(<I18nextProvider i18n={i18n}><App /></I18nextProvider>).html()
  })
})
