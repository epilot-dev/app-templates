import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button, Text } from '@epilot/volt-ui'
import "@epilot/volt-ui/font.css"
import './App.css'

function App() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-gray-50 p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{{name}}</CardTitle>
          <CardDescription>Custom Page</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Text variant="body2">
            Edit <code>src/App.tsx</code> to get started.
          </Text>
          <Button onClick={() => alert('Hello from {{name}}!')}>
            Click me
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
