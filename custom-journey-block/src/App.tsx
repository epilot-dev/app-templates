import { useCallback, useEffect, useState } from 'react'
import { Button, Card, Input } from '@epilot/concorde-elements'
import './App.css'

type AppProps<T> = {
  container: {
    /** Callback to set the value of the custom block */
    setValue: React.Dispatch<T>
    /** The current value of the custom block */
    value?: T
    /** Stringified theme JSON object */
    theme?: string
    /** Any errors the block might have (e.g. value is required) */
    errors?: string
    /** Whether the block is required */
    required?: boolean
    /** Extra arguments from the Journey Builder configuration */
    args?: string
    /** Subscribe to state changes of another block */
    subscribe: (blockId: string, fn: (blockState: unknown) => void) => () => void
  }
}

function App(props: AppProps<unknown>) {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')

  const callback = useCallback((partialState: unknown) => {
    console.log('Block state changed:', partialState)
  }, [])

  useEffect(() => {
    // Example: subscribe to another block's state changes
    // Replace the block ID with a real one from your journey
    const unsubscribe = props.container.subscribe('BLOCK_ID_HERE', callback)
    return () => void unsubscribe()
  }, [props.container.subscribe, callback, props.container])

  return (
    <div className="container">
      <Card>
        <h1>{{name}}</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <Button variant="primary" onClick={() => setCount((c) => c + 1)}>
            count is {count}
          </Button>
          <span>
            Check the{' '}
            <a target="_blank" href="https://docs.epilot.io/apps/building-apps/components/custom-journey-block">
              documentation
            </a>{' '}
            for more information.
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
          <Input
            helperText=""
            id="input"
            label="Enter a value"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter anything..."
            value={value}
            variant="filled"
          />
        </div>
      </Card>
    </div>
  )
}

export default App
