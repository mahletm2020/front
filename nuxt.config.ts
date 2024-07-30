//import { defineNuxtConfig } from 'nuxt3';
import type { NuxtConfig } from 'nuxt/schema';
// import dotenv from 'dotenv';

interface ApolloConfig {
  clients: {
    default: {
      httpEndpoint: string;
      httpLinkOptions: {
        headers: {
          'x-hasura-admin-secret': string;
        };
      };
    };
  };
}

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.HASURA_GRAPHQL_ENDPOINT || 'http://localhost:9701/v1/graphql',
        httpLinkOptions: {
          headers: {
            'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET || ''
          }
        }
      }
    }
  },
  css: [
    '~/assets/main.css'
  ],
  build: {
    // postcss: {
    //   plugins: {
    //     tailwindcss: {},
    //     autoprefixer: {},
    //   },
    //   postcssOptions: require('./postcss.config.js'),
    // },
    extend(config: { module: { rules: { test: RegExp; exclude: RegExp; use: { loader: string; }[]; }[]; }; }, { isDev, isClient }: any) {
      // Add GraphQL loader
      config.module.rules.push({
        test: /\.(gql|graphql)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'graphql-tag/loader'
          }
        ]
      });
    }
  }
} as NuxtConfig & { apollo: ApolloConfig });
