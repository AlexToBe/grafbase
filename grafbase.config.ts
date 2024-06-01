import { graph,config, scalar } from '@grafbase/sdk'

// Welcome to Grafbase!
//
// Configure authentication, data sources, resolvers and caching for your GraphQL API.

const g = graph.Standalone()

const User = g.type('User', {
  name:g.string(),
  // id: scalar.id(),
  email: scalar.email(),
  avatarUrl: scalar.url(),
  description: scalar.string().optional(),
  githubUrl: scalar.url().optional(),
  linkedinUrl: scalar.url().optional(),
})
// @ts-ignore
const Project = g.type('Project', {
  title: g.string(),
  description: g.string(), 
  image: g.url(),
  liveSiteUrl: g.url(), 
  githubUrl: g.url(), 
  category: g.string(),
  createdBy:g.string()
})
export default config({
  graph: g,
  // Authentication - https://grafbase.com/docs/auth
  auth: {
    // OpenID Connect
    // const oidc = auth.OpenIDConnect({ issuer: g.env('OIDC_ISSUER_URL') })
    // providers: [oidc],
    rules: (rules) => {
      rules.public()
    },
  },
  // Caching - https://grafbase.com/docs/graphql-edge-caching
  // cache: {
  //   rules: [
  //     {
  //       types: ['Query'], // Cache everything for 60 seconds
  //       maxAge: 60,
  //       staleWhileRevalidate: 60
  //     }
  //   ]
  // }
})
