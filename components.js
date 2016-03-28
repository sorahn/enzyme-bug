import React from 'react'
import { translate } from 'react-i18next'

const TestComponent = (props) => {
  const { t } = props
  return <div>{t('test_string')}</div>
}

export const Translated = translate('common')(TestComponent)

export const App = () => {
  return (
    <section>
      <Translated />
    </section>
  )
}
