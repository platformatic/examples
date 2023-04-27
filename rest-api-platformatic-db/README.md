# Example: Tasks API

**This example application was created for the guide '[Building REST APIs with Platformatic DB](https://blog.platformatic.dev/building-rest-apis-with-platformatic-db)'.**

## Requirements

Platformatic supports macOS, Linux and Windows ([WSL](https://docs.microsoft.com/windows/wsl/) recommended).
You'll need to have [Node.js](https://nodejs.org/) >= v16.17.0 or >= v18.8.0

## Setup

1. Install dependencies:

```bash
npm install
```

2. Apply migrations:

```bash
npx platformatic db migrations apply
```

3. Seed the database:

```bash
npx platformatic db seed seed.js
```

## Usage

Run the API with:

```bash
npm start
```

### Explore
- ⚡ The Platformatic DB server is running at http://localhost:3042/
- 📔 View the REST API's Swagger documentation at http://localhost:3042/documentation/
- 🔍 Try out the GraphiQL web UI at http://localhost:3042/graphiql
