import { defineRule } from 'vee-validate'
import { required, email, min, max, alpha, min_value, max_value } from '@vee-validate/rules'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('min_for_name', min)
defineRule('max', max)
defineRule('alpha', alpha)
defineRule('min_value', min_value)
defineRule('max_value', max_value)
