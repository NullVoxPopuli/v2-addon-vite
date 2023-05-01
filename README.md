## What is this?

Demonstration of getting rid of the test-app, and doing tests as a sub-directory within your v2/native ember addon.

This means that v2/native addons do not need to be monorepos.
With separate-test-app setups, the app must wait for a full build of the addon -- while this is good for ensuring that your addon will 100% be compatible when consumed from npm, it can be slow for very large addons.

## Instructions

1. `pnpm install`
2. `pnpm start`

