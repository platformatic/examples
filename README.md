# Platformatic Examples ⚡️

This is a curated collection of examples that will help you learn how to build applications with [Platformatic open-source tools](https://oss.platformatic.dev/). They're grouped into the following categories:

- [How-tos](#how-tos)
- [Applications](#applications)
- [Tutorials](#tutorials)
- [Guides](#guides)
- [Workshops](#workshops)
- [Talks](#talks)

<a name="how-tos"></a>

## 🙋 How-tos

A [series of how-to videos](https://www.youtube.com/playlist?list=PL_x4nRdxj60LEXoK5mO-ixOETQTfhqmA7) that will help you get up and running building applications with Platformatic:

- [Understand the parts of a Platformatic app](https://www.youtube.com/watch?v=b6G3xZlzJNk&list=PL_x4nRdxj60LEXoK5mO-ixOETQTfhqmA7)
- [Work with database migrations](https://www.youtube.com/watch?v=iTxWapoG0Bo&list=PL_x4nRdxj60LEXoK5mO-ixOETQTfhqmA7)
- [Create a plugin](https://www.youtube.com/watch?v=6srzPzL_iKM&list=PL_x4nRdxj60LEXoK5mO-ixOETQTfhqmA7)
- [Add REST API routes](https://www.youtube.com/watch?v=1_U8DIkYTH8&list=PL_x4nRdxj60LEXoK5mO-ixOETQTfhqmA7)
- [Query the database](https://www.youtube.com/watch?v=021fOdVML8E&list=PL_x4nRdxj60LEXoK5mO-ixOETQTfhqmA7)
- [Extend the GraphQL API](https://www.youtube.com/watch?v=HjHYFpzW43w&list=PL_x4nRdxj60LEXoK5mO-ixOETQTfhqmA7)
- [Debug a Platformatic app](https://www.youtube.com/watch?v=5yxlSU74pr4&list=PL_x4nRdxj60LEXoK5mO-ixOETQTfhqmA7)
- [Customise data with entity hooks](https://www.youtube.com/watch?v=gJ4PgDiEQTU&list=PL_x4nRdxj60LEXoK5mO-ixOETQTfhqmA7)

<a name="applications"></a>

## 💡 Applications

### [build-modular-monolith-with-platformatic](./applications/build-modular-monolith-with-platformatic)

*Uses: Platformatic Runtime, Platformatic Composer, Platformatic DB, Platformatic Client*

A modular monolith application built with Platformatic Runtime, Composer, DB and Client.

<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1688954748161/869120f8-6a35-49f3-865d-4b0ada2b1618.png?w=1000&auto=format&format=webp" width="500">

### [tutorial-platformatic-auth0-nextjs](https://github.com/platformatic/tutorial-platformatic-auth0-nextjs)

*Uses: Platformatic DB, Auth0, Next.js, React*

A full stack blog application built with Platformatic DB, Auth0 and Next.js.

<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1681880277544/4fdb4b6e-06d4-4c08-b818-898308017466.png?w=1000&auto=format&format=webp" width="500">

### [deploy-full-stack-app-platformatic-vercel-neon](./applications/deploy-full-stack-app-platformatic-vercel-neon)

*Uses: GitHub Actions, Platformatic Cloud, Vercel, Neon*

Blog app with GitHub Actions workflows for automated preview and production deploys.

<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1684467508618/5d29ce19-96d9-49a7-8742-501bbb7b4de5.png?w=1000&auto=format&format=webp" width="500">

### [tutorial-movie-quotes-app](https://github.com/platformatic/tutorial-movie-quotes-app/)

*Uses: Platformatic DB, Astro, urql*

This is the application code for the [Movie Quotes App Tutorial](https://oss.platformatic.dev/docs/getting-started/movie-quotes-app-tutorial/).

### [tasks-api-platformatic-db](./applications/tasks-api-platformatic-db)

*Uses: Platformatic DB*

A tasks API built with Platformatic DB.

### [migrate-fastify-app-to-platformatic-service](./applications/migrate-fastify-app-to-platformatic-service)

*Uses: Fastify, Platformatic Service*

Shows how to migrate a Fastify app to Platformatic Service, with before and after applications.

### [migrate-express-app-to-platformatic-service](./applications/migrate-express-app-to-platformatic-service)

*Uses: Express, Fastify, Platformatic Service*

Shows how to migrate an Express app to Platformatic Service, with before and after applications.

### [authentication-server](https://github.com/platformatic/authentication-server/)

*Uses: Platformatic DB, @fastify/oauth2*

Simple authentication server built on top of Platformatic.

### [unscalable-queue-system](https://github.com/platformatic/unscalable-queue-system/)

*Uses: Platformatic DB, Postgres*

Tiny Queue System that will call your service back after a given time.

<a name="tutorials"></a>

## 🧑‍💻 Tutorials

### [Movie Quotes App tutorial](https://oss.platformatic.dev/docs/getting-started/movie-quotes-app-tutorial)

*Uses: Platformatic DB, Astro, urql*

> This tutorial will help you learn how to build a full stack application on top of Platformatic DB. We're going to build an application that allows us to save our favourite movie quotes. We'll also be building in custom API functionality that allows for some neat user interaction on our frontend.

### [Build and deploy a modular monolith with Platformatic](https://blog.platformatic.dev/build-and-deploy-a-modular-monolith-with-platformatic)

<a href="https://blog.platformatic.dev/build-and-deploy-a-modular-monolith-with-platformatic"><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1688570215856/307772ef-2021-4cb0-bcd7-97ac50e26700.png?w=1000&auto=format&format=webp&fm=png" width="500"></a>

*Uses: Platformatic Runtime, Platformatic Composer, Platformatic DB, Platformatic Client, Platformatic Cloud*

> In this tutorial we'll create a "modular monolith" Library application. It will be a Platformatic Runtime app which contains multiple Platformatic DB and Composer services. We'll learn how to:
>
> - Create and configure a Platformatic Runtime app with multiple services
>   - Three Platformatic DB services, each with their own databases
>   - A Platformatic Composer service which aggregates multiple service's REST APIs into a composed API
> - Customise the composed API that's automatically generated in a Composer service
> - Generate a client for a service's REST API and use it in a Platformatic service to make API requests
> - Add custom functionality to a Composer service's composed API by modifying its routes and responses
> - Deploy a Runtime app to Platformatic Cloud

### [Build a secure web application with Platformatic, Auth0 and Next.js](https://blog.platformatic.dev/build-a-secure-web-application-with-platformatic-auth0-and-nextjs)

<a href="https://blog.platformatic.dev/build-a-secure-web-application-with-platformatic-auth0-and-nextjs"><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1681923099651/35ba11d6-b4db-4bbc-9fea-addb4b6eac29.png?w=1000&auto=format&format=webp&fm=png" width="500"></a>

*Uses: Platformatic DB, Auth0, Next.js, React*

> In this tutorial we'll learn how to:
>
> - Set up an application on Auth0
> - Add user metadata to JSON Web Tokens (JWTs) on Auth0
> - Create a Platformatic DB app and configure authorization
> - Create a Next.js app that integrates with Auth0 and our Platformatic app's REST API

### [Deploy a full stack app with Platformatic, Vercel and Neon](https://blog.platformatic.dev/deploy-a-full-stack-app-with-platformatic-vercel-and-neon)

<a href="https://blog.platformatic.dev/deploy-a-full-stack-app-with-platformatic-vercel-and-neon"><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1684468013088/80a375a7-b0b3-4c9b-9aba-3504168ff05c.png?w=1000&auto=format&format=webp&fm=png" width="500"></a>

*Uses: GitHub Actions, Platformatic Cloud, Platformatic DB, Neon, Postgres, Vercel, Next.js, Auth0*

> In this tutorial we'll learn how to:
>
> - Create an app on Platformatic Cloud to deploy our Platformatic DB app to
> - Create a project on Neon to deploy our Postgres database to
> - Create a project on Vercel to deploy our Next.js front end app to
> - Create applications on Auth0 to enable authentication flows for preview and production apps
> - Create GitHub Actions workflows to:
>   - Automatically deploy a preview of our blog app when we open a pull request on GitHub
>   - Automatically deploy our blog app to production when we merge a pull request or push to our main branch on GitHub

### Community Tutorials

- **[Build a polls API with Platformatic DB](https://dominuskelvin.dev/blog/platformatic-polls-api)** — If you want to learn how to rapidly build REST and GraphQL APIs with the full flexibility of Platformatic DB, Kelvin’s got you covered.
- **[Building a Link Curation API with Platformatic](https://www.ianwootten.co.uk/2023/03/28/building-a-link-curation-api-with-platformatic/)** — Ian takes you step-by-step through building a custom GraphQL API with Platformatic DB. It’s a great way to get familiar with the features of Platformatic DB and learn how to add custom functionality to your app.

<a name="guides"></a>

## 🗺️ Guides

### [OSS Guides](https://oss.platformatic.dev/docs/category/guides)

A collection of guides for working with Platformatic open-source tools.

### [Building REST APIs with Platformatic DB](https://blog.platformatic.dev/building-rest-apis-with-platformatic-db)

<a href="https://blog.platformatic.dev/building-rest-apis-with-platformatic-db"><img src="https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1683216881781%2F472deaa6-7785-4f30-926b-a1ddc6338029.png%3Fw%3D1200%26auto%3Dformat%26format%3Dwebp%26fm%3Dpng" width="500"></a>

*Uses: Platformatic DB, REST*

> In this guide we’re going to take a tour of the automatic REST API that Platformatic DB generates for us. We’ll learn about all of the features it provides, as well as how we can extend it with our own custom REST API routes.

### [How to migrate a Fastify app to Platformatic Service](https://blog.platformatic.dev/how-to-migrate-a-fastify-app-to-platformatic-service)

<a href="https://blog.platformatic.dev/how-to-migrate-a-fastify-app-to-platformatic-service"><img src="https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1685388617517%2Fb1236004-894d-4302-adef-70b87466f9ab.png%3Fw%3D1200%26auto%3Dformat%26format%3Dwebp%26fm%3Dpng" width="500"></a>

*Uses: Fastify, Platformatic Service*

> [Platformatic Service](https://oss.platformatic.dev/docs/reference/service/introduction) is the natural evolution of the build-it-from-scratch Fastify development experience. It provides a solid foundation for building Node.js applications on top of Fastify, with best practices baked in.
>
> The good news is that the path to migrate a Fastify application to use Platformatic Service is fairly straightforward. This guide covers some of the things you'll need to know when migrating an application, as well as tips on different migration approaches.

### [How to deploy an Express app to Platformatic Cloud](https://blog.platformatic.dev/how-to-deploy-an-express-application-to-platformatic-cloud)

<a href="https://blog.platformatic.dev/how-to-deploy-an-express-application-to-platformatic-cloud"><img src="https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1686685153803%2F8a87b92e-84ac-4c14-a910-f4af38596bd4.png%3Fw%3D1200%26auto%3Dformat%26format%3Dwebp%26fm%3Dpng" width="500"></a>

*Uses: Express, Fastify, Platformatic Service*

> If you have an existing [Express](http://expressjs.com/) application, migrating it to Fastify could potentially be time consuming, and might not be something that you're able to prioritise right now. You can however still take advantage of Fastify, as well as our open-source tools and Cloud hosting service. In this guide you'll learn how to use the [`@fastify/express`](https://www.npmjs.com/package/@fastify/express) plugin to help you rapidly migrate your existing Express application to use Platformatic Service, and then deploy it to Platformatic Cloud.

<a name="workshops"></a>

## ⚒️ Workshops

- [Node.js Backend Masterclass](https://github.com/platformatic/node-masterclass)
- [Learn Fastify](https://github.com/platformatic/learn-fastify)
- [Platformatic DB Workshop](https://github.com/platformatic/db-workshop)

<a name="talks"></a>

## 🗣️ Talks

- [Watch Platformatic Talks on YouTube](https://www.youtube.com/playlist?list=PL_x4nRdxj60ITjSWRGo_tIT-VF85xdf6W) — Recordings of our conference and meetup talks all in one handy playlist.
- [Building a Modular Monolith with Fastify](https://github.com/mcollina/modular_monolith) — Code for the 'Building a Modular Monolith with Fastify' talk.
- [Choose your own API adventure with Platformatic DB](https://github.com/platformatic/talk-choose-your-own-api-adventure-with-platformatic-db) — Code for the 'Choose your own API adventure with Platformatic DB' talk.
