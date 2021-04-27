import React from 'react'
import {Routing} from './routing'
import {I18nextProvider} from 'react-i18next'
// @ts-ignore
import i18next from 'utils/helpers/i18n'


export const App = () => <I18nextProvider i18n={i18next}><Routing /></I18nextProvider>
