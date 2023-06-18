# Example: Build a modular monolith with Platformatic Runtime, Composer, DB and Client

> **This example application was created for the tutorial '[Build and deploy a modular monolith with Platformatic](https://blog.platformatic.dev/build-and-deploy-a-modular-monolith-with-platformatic)'.**

This is a generated [Platformatic Runtime](https://oss.platformatic.dev/docs/reference/runtime/introduction) application.

## Requirements

Platformatic supports macOS, Linux and Windows ([WSL](https://docs.microsoft.com/windows/wsl/) recommended).
You'll need to have [Node.js](https://nodejs.org/) >= v18.8.0 installed.

This is a monorepo which is configured to work with with [pnpm](https://pnpm.io/). It's recommended that you have it [installed](https://pnpm.io/installation) so you can easily run commands for multiple services, but you can use npm if you prefer.

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Apply migration to all service databases:

```bash
pnpm run -r migrate
```

2. Seed all service databases:

```bash
pnpm run -r seed
```

## Usage

Run the Runtime app with:

```bash
pnpm start
```

## Adding a Service

Adding a new service to this project is as simple as running `create-platformatic` again, like so:

```bash
pnpm exec create-platformatic
```
