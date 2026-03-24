import r2wc from "@r2wc/react-to-web-component"
import App from './App.tsx'

const componentTag = '{{name}}'

const CustomBlock = r2wc(App, {
  props: {
    value: 'string',
    errors: 'string',
    required: 'boolean',
    theme: 'json',
    args: 'json',
    setValue: 'function',
    subscribe: 'function',
  },
})

customElements.define(componentTag, CustomBlock)
