# epilot App Templates

Component templates for the [epilot CLI](https://github.com/epilot-dev/sdk-js/tree/main/packages/cli).

## Usage

These templates are used automatically by the epilot CLI:

```bash
epilot app init my-app
cd my-app
epilot app add-component my-tab --type CUSTOM_CAPABILITY
```

## Templates

### Code-based (have build step)

| Template | Description | Stack |
|---|---|---|
| `custom-capability` | Entity tab or group | React + Vite + Tailwind + Volt UI + App Bridge |
| `custom-journey-block` | Journey builder block | React + Vite + r2wc (Web Component) |
| `custom-page` | Custom navigation page | React + Vite + Tailwind + Volt UI + App Bridge |
| `custom-portal-block` | Portal widget | React + Vite + Tailwind + Volt UI + App Bridge |
| `custom-flow-action-sandbox` | Sandboxed flow action | TypeScript (runs in epilot sandbox) |

### Config-only (no build step)

| Template | Description |
|---|---|
| `custom-flow-action-external` | External integration webhook |
| `portal-extension` | Portal extension hooks |
| `external-product-catalog` | External product catalog hooks |

## Placeholder variables

Templates use `{{name}}` as a placeholder that gets replaced by the CLI with the component name.

## Contributing

1. Create or edit a template directory
2. Use `{{name}}` for the component name placeholder
3. Make sure the template works standalone: `cd template && npm install && npm run build`
