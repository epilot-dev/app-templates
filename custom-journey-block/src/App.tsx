import { useState } from 'react'
import { Button, Card, Input } from '@epilot/concorde-elements'
import './App.css'

type AppProps<T> = {
  container: {
    setValue: React.Dispatch<T>
    value?: T
    theme?: string
    errors?: string
    required?: boolean
    args?: string
    subscribe: (blockId: string, fn: (blockState: unknown) => void) => () => void
  }
}

function App(_props: AppProps<unknown>) {
  const [value, setValue] = useState('')

  return (
    <div className="container">
      <Card>
        <h1>{{name}}</h1>
        <p>Edit <code>src/App.tsx</code> to get started.</p>
        <Input
          id="input"
          label="Enter a value"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
          value={value}
          variant="filled"
        />
      </Card>
    </div>
  )
}

export default App
