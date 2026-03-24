# {{name}} — Custom Flow Action (Sandbox)

A sandboxed JavaScript flow action that runs inside epilot's runtime.

## Development

```bash
npm install
npm run build
```

Edit `src/handler.ts` to implement your flow action logic. The built code is read by the CLI during `epilot app deploy` and uploaded as the sandbox code.

## Limits

- Maximum code size: 300KB
- `eval()` and `Function()` constructor are not allowed
- Code runs in a sandboxed environment with access to `fetch()`, `console`, and standard JS globals

See: https://docs.epilot.io/docs/apps/custom-flow-actions
