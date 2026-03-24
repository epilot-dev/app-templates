# {{name}} — Custom Flow Action (External Integration)

This is a config-only component. No build step required.

Edit `configuration.json` to configure the webhook URL that epilot calls when the flow action is triggered.

The request body contains the flow execution context including entity data.

## Configuration

- `url` — The endpoint epilot will POST to
- `headers` — Custom headers (use `{{option_key}}` for secret interpolation)
- `wait_for_callback` — Set to `true` if epilot should wait for your endpoint to call back before completing the action

See: https://docs.epilot.io/docs/apps/custom-flow-actions
