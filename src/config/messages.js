import { configure } from 'vee-validate'

import { localize } from '@vee-validate/i18n'

import en from '@vee-validate/i18n/dist/locale/en.json'
import ka from '@vee-validate/i18n/dist/locale/ka.json'

configure({
  generateMessage: localize({
    en: {
      ...en,
      messages: {
        required: 'This field is required',
        min: 'This field must be at least 8 characters',
        max: 'This field must be less than 15 characters',
        alpha: 'This field may only contain alphabetic characters'
      },
      names: {}
    },
    ka: {
      ...ka,
      messages: {
        required: 'ამ ველის შევსება აუცილებელია',
        min: ' ველი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან',
        max: ' ველი უნდა შედგებოდეს 15 სიმბოლოსგან',
        alpha: 'სახელის ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს'
      },
      names: {
        email: 'იმეილი',
        password: 'პაროლი',
        name: 'სახელი',
        surname: 'გვარი'
      }
    }
  })
})
