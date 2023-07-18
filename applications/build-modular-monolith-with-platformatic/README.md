# Example: Build a modular monolith with Platformatic Runtime, Composer, DB and Client

> **This example application was created for the tutorial '[Build and deploy a modular monolith with Platformatic](https://blog.platformatic.dev/build-and-deploy-a-modular-monolith-with-platformatic)'.**

This is a generated [Platformatic Runtime](https://docs.platformatic.dev/docs/reference/runtime/introduction) application.

## Architecture

<a href="https://cdn.hashnode.com/res/hashnode/image/upload/v1688954748161/869120f8-6a35-49f3-865d-4b0ada2b1618.png?auto=format&format=webp"><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1688954748161/869120f8-6a35-49f3-865d-4b0ada2b1618.png?auto=format&format=webp"></a>

## Requirements

Platformatic supports macOS, Linux and Windows ([WSL](https://docs.microsoft.com/windows/wsl/) recommended).
You'll need to have [Node.js](https://nodejs.org/) >= v18.8.0 installed.

This is a monorepo which is configured to work with with [pnpm](https://pnpm.io/). It's recommended that you have it [installed](https://pnpm.io/installation) so you can easily run commands for multiple services, but you can use npm if you prefer.

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Create `.env` files for each service:

```bash
pnpm run -r configure
```

3. Apply migrations for all service databases:

```bash
pnpm run -r migrate
```

4. Seed all service databases:

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
