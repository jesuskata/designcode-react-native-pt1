// Dependencies
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Constants
import {
  EXPO_CONTENTFUL_TOKEN, EXPO_CONTENTFUL_URI
} from '../../constants';

// Apollo Client
export const client = new ApolloClient({
  uri: !EXPO_CONTENTFUL_URI ? '' : EXPO_CONTENTFUL_URI,
  cache: new InMemoryCache(),
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer ${!EXPO_CONTENTFUL_TOKEN ? '' : EXPO_CONTENTFUL_TOKEN}`
  }
});
