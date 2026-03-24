// Sandbox Flow Action handler for {{name}}
//
// This code runs in epilot's sandboxed JavaScript runtime when the
// flow action is triggered. Maximum size: 300KB.
//
// Available globals:
//   - fetch() for HTTP requests
//   - console.log() for debugging
//   - JSON, Math, Date, etc.
//
// Restrictions:
//   - eval() and Function() constructor are not allowed
//
// See: https://docs.epilot.io/docs/apps/custom-flow-actions

async function handler(event: Record<string, unknown>) {
  console.log('Sandbox flow action triggered:', event)

  // Access entity data from the flow execution context
  const entity = event.entity as Record<string, unknown> | undefined

  if (entity) {
    console.log('Entity ID:', entity._id)
    console.log('Entity schema:', entity._schema)
  }

  // TODO: Implement your flow action logic here
  // Example: call an external API
  //
  // const response = await fetch('https://api.example.com/action', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ entity_id: entity?._id }),
  // })

  return { success: true }
}

// Export for the sandbox runtime
export default handler
