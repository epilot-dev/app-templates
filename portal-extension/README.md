# {{name}} — Portal Extension

This is a config-only component. No build step required.

Edit `configuration.json` to configure the portal extension hooks.

## Available hook types

- `registration_identifiers_check` — Custom registration identifier lookup
- `contract_identification` — Custom contract identification for self-assignment
- `meter_reading_plausibility_check` — Custom meter reading validation
- `consumption_data_retrieval` — Custom consumption data retrieval
- `cost_data_retrieval` — Custom cost data retrieval
- `price_data_retrieval` — Custom price data retrieval

See: https://docs.epilot.io/docs/apps/portal-extensions
